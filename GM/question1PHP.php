<?php
$line = "86,2,3";
$line = explode(",", $line);
$testNum = decbin($line[0]);
echo $testNum[$line[1]] === $testNum[$line[2]];
var