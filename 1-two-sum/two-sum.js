/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let res = new Map();
    for (let i = 0; i < nums.length; i ++) {
        const sub = target - nums[i];
        if (res.has(sub)) return [res.get(sub), i];
        res.set(nums[i], i);
    }
    return [];
};