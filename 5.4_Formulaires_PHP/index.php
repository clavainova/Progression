<!DOCTYPE html>
<html lang="en">

<head></head>

<body>
    <?php
    include "sessionstart.php";
    if (!isset($_SESSION["username"])) :
        include "form.php";
    else:
        include "page.php";
    endif;
    ?>
</body>