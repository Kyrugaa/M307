<!doctype html>
<html lang="en">

<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
</head>

<body>
<div class="container">
<h2> Get Request Parameter anzeigen </h2>
<table>
<?php
        foreach($_GET as $key => $value){
            echo "<tr>";
            echo "<td>".$key."</td>";
            echo "<td>".$value."</td>";
        }
?>
</table>
</div>
</body>
</html>
