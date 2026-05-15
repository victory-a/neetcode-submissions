class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        let subString = "";

        for (let i = 0; i < s.length; i++) {
            function expand(left, right) {
                while (left >= 0 && right < s.length && s[left] === s[right]) {
                    const slice = s.slice(left, right + 1);
                    if (slice.length > subString.length) {
                        subString = slice;
                    }

                    left--;
                    right++;
                }
            }

            expand(i, i);
            expand(i, i+1);
        }

        return subString;
    }
}
