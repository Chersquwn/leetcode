// problem https://leetcode.com/problems/min-stack/

/**
 * initialize your data structure here.
 */
const MinStack = function () {
  this.stack = []
  this.min = []
};

/**
 * @param {number} x
 * @return {void}
 *
 * 算法:
 * 1、当 this.min 为空时，第一个值为最小值
 * 2、当 push 进来的值 x 小于当前 this.min 最后一项时，将 x push 进 this.min
 * 3、this.min 最后一项为当前栈中最小值
 */
MinStack.prototype.push = function (x) {
  this.stack.push(x)

  if (this.min.length === 0 || x <= this.min[this.min.length - 1]) {
    this.min.push(x)
  }
};

/**
 * @return {void}
 *
 * 算法：
 * 1、当栈顶元素 pop 出时，判断该栈顶元素是否为当前栈最小值，如果是，则将其 pop
 * 2、this.min 最后一项为当前栈中最小值
 */
MinStack.prototype.pop = function () {
  const pop = this.stack.pop()

  if (pop === this.min[this.min.length - 1]) {
    this.min.pop()
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.min[this.min.length - 1]
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
