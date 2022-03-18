/**
 * 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
 * @param nums
 * @param target
 * @returns {(number|number)[]}
 */
function twoSum(nums, target) {
    for(let i = 0; i< nums.length; i++) {
        for(let j = i+1; j < nums.length; j++) {
            if(nums[i] + nums[j] == target){
                return [i, j]
            }
        }
    }
}

console.log(twoSum([2,7,11,15], 9))
