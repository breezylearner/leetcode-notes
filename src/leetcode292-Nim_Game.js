/**
 * @param {number} n
 * @return {boolean}
 */
/*
提炼题目:
    1.石头总数必须为正整数n
    2.作为先手,1<=第一次拿<4,且之后轮到的次序是奇数
    3.数组最后一位是奇数,赢(true);最后一位是偶数,输(false)
最优解:
    只要最后给对手留4块石头,就不输!!!
 */
var canWinNim = function (n) {
  return n % 4 != 0;
};
