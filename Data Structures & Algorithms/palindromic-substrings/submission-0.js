class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        let count = 0;

        for (let i = 0; i < s.length; i++) {

            function expand(left, right) {
                while (left >= 0 && right < s.length && s[left] === s[right]) {
                    count++;
                    left--;
                    right++;
                }
            }

            expand(i,i)
            expand(i, i+1)
        }

        return count;
    }
}
