
import Stack from "./Stack"
import decimalToBinary from "./decimalToBinary";

/*封装的栈结构测试 demo*/
const stack = new Stack()

/*入栈测试*/

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
console.log(stack)

/*出栈*/

console.log(stack.pop()); //4

/*望栈*/
console.log(stack.peek()); //3

/*是否为空*/
console.log(stack.isEmpty());

/*栈的个数*/
console.log(stack.size());

/*清空*/
console.log(stack.clear(),stack);

console.log(decimalToBinary(20));
console.log(decimalToBinary(10));
console.log(decimalToBinary(12));