<?php
function minMoves($arr) {
    // Write your code here
    // Array to store count of zeroes
    $noOfZeroes[count($arr)] = array();
    $noOfZeroes = array_fill(0, count($arr), true);
    $count = 0;

    // Count number of zeroes
    // on right side of every one.
    $noOfZeroes[count($arr) - 1] = 1 - $arr[count($arr) - 1];
    for ($i = count($arr) - 2; $i >= 0; $i--)
    {
        $noOfZeroes[$i] = $noOfZeroes[$i + 1];
        if($arr[$i] == 0) {
            $noOfZeroes[$i]++;
        }
    }

    // Count total number of swaps by adding
    // number of zeroes on right side of every one.
    for ($i = 0; $i < count($arr); $i++)
    {
        if($arr[$i] == 1) {
            $count += $noOfZeroes[$i];
        }
    }

    return $count;
}
