import Queue from "../queue";


/**
 * 初始化 优先级队列元素
 * element: 存入的元素
 * priority: 优先级
 */
class QueueElement {
  constructor(ele,priority) {
    this.element = ele;
    this.priority = priority;
  }
}


//实现优先级队列
export  class PriorityQueue extends Queue{
  constructor() {
    super();
  }

  /**
   * ele: 入队元素
   * priority 入队优先级 number
   */
  enqueue(ele, priority) {
    let priorityQueueElement = new QueueElement(ele, priority);

  //  如果队列为空值 则直接入队即可
    if(this.isEmpty()){
      this.item.push(priorityQueueElement)
    } else {
    //  如果不是空值 需要比较优先级

      let added = false // 优化 时间复杂度
      for (let i=0;i<this.item.length;i++){

        //priority 值越大的优先级反而低
        // 比较 每一个元素优先级的值都比 当前元素的优先级的值大 说明当前元素的优先级高 就把当前元素入队
        if( priorityQueueElement.priority < this.item[i].priority ){
          this.item.splice(i,0, priorityQueueElement)
          added = true;
          break
        }
      }

      // 说明 新元素 比队列中的所有元素的优先级都要低
      if(!added){
        this.item.push(priorityQueueElement)
      }
    }


  }

  /**
   * 出队
   * @returns {*}
   */
  dequeue() {
    return super.dequeue();
  }
  peek() {
    return super.peek();
  }
  isEmpty() {
    return super.isEmpty();
  }



}
