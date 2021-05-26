<?php
switch ($_GET['op']){
  case "add": print $_GET['x1'] + $_GET['x2']; break;
  case "sub": print $_GET['x1'] - $_GET['x2']; break;
  case "div": print $_GET['x1'] / $_GET['x2']; break;
  case "mul": print $_GET['x1'] * $_GET['x2']; break;
  default: print "fehlerhafter Operator";
}

 ?>
