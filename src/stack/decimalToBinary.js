/*基于栈结构实现10进制 转2进制*/
import Stack from "./Stack";

function decimalToBinary(decNumber) {
  let stact = new Stack()
  let binaryString = ''

  while (decNumber > 0) {
    stact.push(decNumber % 2)
    decNumber = Math.floor(decNumber / 2)
  }
//  把放入栈中的元素从栈顶依次取出
  while (!stact.isEmpty()) {
    binaryString += stact.pop()
  }
  return binaryString
}

export default decimalToBinary
