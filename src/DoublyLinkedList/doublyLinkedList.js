import {LinkedList, Node} from '../LinkedList/linkedList';

// 双向链表结构的封装

// 双向链表的节点类（继承单向链表的节点类）
class DoublyNode extends Node {
  constructor(element) {
    super(element);
    this.prev = null;
  }
}

// 双向链表类（继承单向链表类）
export class DoublyLinkedList extends LinkedList {

  constructor() {
    super();
    this.tail = null;
  }

  /* 重写append 方法*/
  append(element) {

    let newNode = new DoublyNode(element)
    /* 判断添加的是否是第一个节点*/
    if (!this.length) {
      // this.prev = this.head
      this.head = newNode
      this.tail = newNode
    } else {
      let current = this.head
      /* 找到最后一个节点*/

      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    }
    this.length++
  }

  toString() {
    return this.forwardString()
  }

  forwardString() {
    let resultStr = ""
    let current = this.tail
    while (current) {
      resultStr += current.data + " "
      current = current.prev
    }

    return resultStr
  }

  backwordString() {
    let current = this.head
    let resultStr = ""
    while (current) {
      resultStr += current.data + " "
      current = current.next
    }
    return resultStr
  }

  /* 重写插入数据*/
  insert(position, data) {
    /* 越界判断*/
    if (position < 0 || position > this.length) return false
    let newNdoe = new DoublyNode(data)
    /* 当position 为0的 并且列表为空的时候*/
    if (position === 0 && this.length === 0) {
      this.head = newNdoe
      this.tail = newNdoe
    } else {
      if (position === 0) {
        this.head.prev = newNdoe
        newNdoe.next = this.head

      }
    }

  }

}
