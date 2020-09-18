/* 队列是一种先入先出的数据结构 */
export default class Queue {
  constructor() {
    this.item = []
  }

  /* 入队*/
  enqueue(ele) {
    this.item.push(ele)
  }

  /*出队*/
  dequeue() {
   return  this.item.shift()
  }

  /*望队 查看队列头部的元素并返回*/
  peek() {
    return this.item[0]
  }

  /*isEmpty 查看队列是否为空*/
  isEmpty() {
    return this.item.length === 0
  }

  /*返回队列包含的元素个数*/
  size() {
    return this.item.length
  }

}