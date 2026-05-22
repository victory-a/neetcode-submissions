class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let count = 0;

        let left = 0, right = height.length-1;
        let maxLeft = height[0], maxRight = height[height.length-1];

        while (left < right) {
            if (height[left] < height[right]) {

                if (maxLeft > height[left]) {
                    count += maxLeft - height[left];
                } else {
                    maxLeft = height[left];
                }
                left++;
            } else {

                if (maxRight > height[right]) {
                    count += maxRight - height[right];
                } else {
                    maxRight = height[right];
                }
                right--;
            }
        }

        return count;
    }
}
