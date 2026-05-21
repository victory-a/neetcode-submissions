class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxArea = 0, leftIndex = 0, rightIndex = heights.length-1

        while (leftIndex < rightIndex) {
            const width = rightIndex - leftIndex;
            const height = Math.min(heights[leftIndex], heights[rightIndex])
            maxArea = Math.max(maxArea, width*height);

            if (heights[leftIndex]< heights[rightIndex]) {
                leftIndex++;
            } else {
                rightIndex--
            }
        }

        return maxArea;
    }
}
