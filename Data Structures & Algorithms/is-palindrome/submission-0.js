class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let arr = s.toLowerCase().replace(/[^a-z0-9]/g, "").split("")

        let left = 0 
        let right = arr.length -1
        
        while(left <right){
            if (arr[left] !== arr[right]){
                return false
            }else {
                left++ 
                right --
            }
        }
        return true
    }
}
