import Queue from "../queue/queue";

/* 存放优先队列的元素*/
class QueueElement {
  constructor(element, priorite) {
    this.element = element
    this.priorite = priorite
  }
}



/* 默认优先级数字越小 优先级越大*/
export class PriorityQueue extends Queue {
  constructor() {
    super();
  }

  /*入队 重写入队*/
  enqueue(element, priorite) {
    let queueElement = new QueueElement(element,priorite)
    // 如果优先级队列 内部没有元素 那就直接添加元素

    if (this.isEmpty()) {

      this.item.push(queueElement)
    }else{
      let isAdd = false ; // 记录是否添加过元素
      for (let i =0;i<this.item.length;i++){

        if(queueElement.priorite < this.item[i].priorite){
          this.item.splice(i,0,queueElement)
          isAdd = true
          break; // 添加结束,返回 提升性能
        }
      }
      /* 如果所有的优先级都大于新插入的元素 那么将新插入的元素放到最后*/
      if(!isAdd){
        this.item.push(queueElement)
      }
    }
  }
  /*出队 重写出队方法*/

  /* 以下方法完全继承自 queue 可写可不写*/
  dequeue(){
  return   super.dequeue()
  }

  /* 望队 查看队列顶部的信息 利用继承完全ok 并返回*/
  peek() {
    return super.peek();
  }
  size() {
    return super.size();
  }

  isEmpty() {
    return super.isEmpty();
  }


}
