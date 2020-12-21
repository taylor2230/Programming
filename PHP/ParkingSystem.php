<?php
class ParkingSystem {
    /**
     * @param Integer $big
     * @param Integer $medium
     * @param Integer $small
     */
    function __construct($big, $medium, $small) {
        $this->parkingSpots = array($big, $medium, $small);
    }

    /**
     * @param Integer $carType
     * @return Boolean
     */
    function addCar($carType) {
        if($this->parkingSpots[$carType-1] > 0) {
            $this->parkingSpots[$carType-1] = $this->parkingSpots[$carType-1]-1;
            return true;
        } else {
            return false;
        }
    }
}
