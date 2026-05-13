class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map();
        [1,2,3,4]

        for (let i = 0; i < nums.length; i++) {
            const complament = target - nums[i];

            if (map.has(complament)) {
                return [map.get(complament), i];
            }

            map.set(nums[i], i);
        }
    }
}
