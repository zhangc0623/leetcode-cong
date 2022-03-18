/**
 * 给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度
 * @param nums
 * @param val
 * @returns {*}
 */
function removeElement(nums, val) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == val) {
            nums.splice(i, 1)
            i =- 1
        }
    }
    return nums
}

console.log(removeElement([3,2,2,3], 3))
