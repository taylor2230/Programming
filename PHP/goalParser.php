
<?php
    class Solution {

    /**
    * @param String $command
    * @return String
    */
    function interpret($command) {
    $toReplace = array("()", "(al)");
    $replaced = array("o", "al");
    return str_replace($toReplace, $replaced, $command);
    }
    }
