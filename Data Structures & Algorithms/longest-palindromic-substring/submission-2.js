class Solution {
    longestPalindrome(s) {
        let longest = "";

        const expand = (left, right) => {
            while (
                left >= 0 &&
                right < s.length &&
                s[left] === s[right]
            ) {
                const current = s.slice(left, right + 1);

                if (current.length > longest.length) {
                    longest = current;
                }

                left--;
                right++;
            }
        };

        for (let i = 0; i < s.length; i++) {
            // odd length
            expand(i, i);

            // even length
            expand(i, i + 1);
        }

        return longest;
    }
}