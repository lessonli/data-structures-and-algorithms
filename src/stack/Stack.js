/*
* Stack 后入先出
* */
export default class Stack {
  constructor() {
    this.item = []
  }

  /*
  * 入栈 添加一个（或几个）新元素到栈顶。
  * */
  push(item){
    this.item.push(item)
  }

  /*出栈
  * 移除栈顶的元素，同时返回被移除的元素。
  * */
  pop(){
    return this.item.pop()
  }

  /*望栈  查看栈顶的元素并返回 不对栈做修改*/
  peek(){
    return this.item[this.item.length-1]
  }

  /*
  * 如果栈里没有任何元素就返回 true ，否则返回 false 。
  * */

  isEmpty(){
    return this.item.length===0
  }

  /*clear 移除栈里所有的元素*/

  clear(){
    this.item.length=0
  }

  /*返回栈中的元素个数*/
  size(){
    return this.item.length
  }

}