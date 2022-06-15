import { LinkedList, Node } from '../linkedList';

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
        this.head.prev = newNdoe  // this.head 指向的是原先的下标为0 的元素 该元素的上一个就是新插入的元素
        this.tail = newNdoe
        newNdoe.next = this.head // 新元素的next 指针 就等于原来的 元素  this.head 就指向原来的元素

      } else if (position === this.length) {
        /* 如果是插入到最后*/
        this.tail.next = newNdoe  // 原始链表的next 指向最新的 节点
        newNdoe.prev = this.tail  // 新节点的 上一个指针指向原来的最后一个节点
        this.tail = newNdoe       // 更新最后一个节点
      } else {
        /* 插入的几点 既不是第一个 也不是最后一个*/
        let index = 0
        let currentNode = this.head
        /* 1.找到当前要插入的节点*/
        while (index < position) {
          currentNode = currentNode.next
          index++
        }
        /* 2.找到之后 更新 更新指针*/

        // 注意这里的两个 current 顺序不能乱 我们要通过 current 获取原始链表的上一个节点
        currentNode.prev.next = newNdoe
        currentNode.prev = newNdoe
        newNdoe.prev = currentNode.prev
        newNdoe.next = currentNode
      }
    }

    this.length += 1
    return true // 插入成功
  }

  /* 获取某一节点的数据*/
  get(position) {
    /* 越界判断*/
    if (position < 0 || position >= this.length) return false
    let index = 0
    let current = this.head
    while (index++ < position) {
      current = current.next
    }
    return current
  }

  /* 另一个思路实现 get 效率稍微好一点*/
  /* 从后往前prev this.length 除以2  和 position 比较 判断  有点二分法的思想*/

  /*当this.length / 2 > position：从头（head）开始遍历；
当this.length / 2 < position：从尾（tail）开始遍历；*/
  _get(position) {

  }

  idnexOf(data) {
    let index = 0
    let currentNode = this.head

    /*查找和data 相同的节点*/
    while (currentNode) {
      if (currentNode === data) {
        return index
      }

      currentNode = currentNode.next
      index += 1
    }
    return -1
  }

  /* 重写 update 方法*/
  update(position, newData) {
    /* 越界判断*/
    if (position < 0 || position >= this.length) return false

    /* 找到 正确的节点*/
    let index = 0
    let currentNode = this.head

    while (index++ < position) {
      currentNode = currentNode.next
    }
    /* 找到正确的节点之后更新指针(链接·)*/
    currentNode.data = newData
    return true
  }

  removeAt(position) {
    /* 越界判断*/
    if (position < 0 || position >= this.length) return null // 表示没有信息删除
    let currentNode = this.head // 在顶部声明 在尾部返回
    /*删除第一个*/
    /* 当链表只有一个元素的时候 */
    if (this.length === 1) {
      /* 修改指针*/
      this.head = null
      this.tail = null
    } else {
      if (position === 1) {
        if (position === 0) {
          this.head.next.prev = null
          this.head = this.head.next
        } else if (position === this.length - 1) {
          /* 删除最后一个节点*/
          this.tail.prev.next = null
          this.tail = this.tail.prev
          currentNode = this.tail
        } else {
          let index = 0


          while (index++ < position) {
            currentNode = currentNode.next
          }
          /* 找到节点 之后 改变对应的指针*/
          currentNode.prev.next = currentNode.next
          currentNode.next.prev = currentNode.prev

        }
      }
    }
    this.length--
    return currentNode.data
  }

  remove(data) {
    let index = this.indexOf(data)
    return this.removeAt(index)
  }

  size() {
    return super.size();
  }

  isEmpty() {
    return super.isEmpty();
  }

  /* 获取链表的第一个元素*/
  getFirst(){
    return this.head.data
  }
  getLast(){
    return this.tail.data
  }

}
