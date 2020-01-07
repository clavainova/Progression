import { Nav } from "./nav.js";

var navList = [];
var footList = [];
//JSON

let promArr = JSONget("./data/menu.json");
promArr.then(function (value) {
    value.principal.forEach(function (item) {
        try {
            let arr = value.sousmenus;
            let navObj = new Nav(item.nom, item.lien, arr);
            navList.push(navObj);
        } catch (e) {
            let navObj = new Nav(item.nom, item.lien, []);
            navList.push(navObj);
        }
    });
    value.pied.forEach(function (item) {
        let navObj = new Nav(item.nom, item.lien, []);
        footList.push(navObj);
    });
}).then(addToDOM);

function JSONget(url) {
    return new Promise(function (resolve, reject) {
        let xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", url, true);
        xmlhttp.send();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                let arr = JSON.parse(this.responseText);
                //resolves when recieves json, returns data
                resolve(arr);
            }
        }
    });
}


function addToDOM() {
    navList.forEach(function (item) {
        let nom = document.createTextNode(item.nom);
        let a = document.createElement("a");
        a.appendChild(nom);
        a.setAttribute("href", item.lien);
        document.getElementsByTagName("nav")[0].appendChild(a);
        try { //if submenu
            console.log("does this have submenus? " + item.children);
            item.children.forEach(function (elem) {
                let nomS = document.createTextNode(elem.nom);
                let aS = document.createElement("a");
                aS.appendChild(nomS);
                aS.setAttribute("href", elem.lien);
                document.getElementsByTagName("nav")[0].appendChild(aS);
            });
        } catch (e) {
            console.log("no submenus");
        }
    });
    footList.forEach(function (item) {
        let nom = document.createTextNode(item.nom);
        let a = document.createElement("a");
        a.appendChild(nom);
        a.setAttribute("href", item.lien);
        document.getElementsByTagName("footer")[0].appendChild(a);
    });
}

