package Java;

class Solution {
    public int[] twoSum(int[] nums, int target) {
        int[] combo = new int[2];
        if(nums.length < 1) {
            return combo;
        }

        if(nums.length < 2) {
            return combo;
        }

        for(int i = 0; i < nums.length;i++) {
            for(int y = i+1; y < nums.length;y++) {
                if((nums[i] + nums[y]) == target) {
                    combo[0] = i;
                    combo[1] = y;
                    return combo;
                }
            }
        }
        return combo;
    }
}