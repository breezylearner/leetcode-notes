/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
/*  
一.难点：加油和耗油之间的关系是什么？完成循环的必要条件是什么？能转化成什么数学条件？
二.破题关键：完成一圈环绕，至少要满足消耗的值。即，gas的总量要大于cost的总量。
三.解法：使用遍历法
1.若当前gas>cost，前进（有油可用）.
2.到下个站点，看剩下的和加上的够不够去下一站：(剩余)gas+(当前)gas-cost>=0?  
    （1）大于0，前进
    （2）小于0，不能向前，遍历失败
四.提示：不必非要一次性将所有变量全写在开头，在写的中途补充也可以。
参考理解：「图解」为什么总加油>=总油耗就一定有解？
*/
var canCompleteCircuit = function (gas, cost) {
  let total = 0;
  let curr = 0;
  let start = 0;
  for (let i = 0; i < gas.length; i++) {
    curr += gas[i] - cost[i];
    if (curr < 0) {
      start = i + 1;
      curr = 0;
    }
    total += gas[i] - cost[i];
  }
  return total >= 0 ? start : -1;
};
// 时间复杂度：O(N)  空间复杂度：O(1)
