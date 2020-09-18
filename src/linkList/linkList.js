/* 链表*/
/* 1.内存空间不是必须是连续的
*  2. 链表的每个元素由一个存储元素本身的节点和指向下一个元素的引用组成
* */
/* 相比数组的优点
* 内存空间不是必须是连续的,可以充分利用计算机的内存，实现灵活的内存动态管理
* 链表不必在创建时就确定大小，而且大小可以无限的延申下去
* 链表在删除和插入数据时 时间复杂度可以达到O(1) 相对数组效率高很多*/
/*相对数组链表的缺点*/
/*
* 链表访问任何一个位置的元素时，都需要从头开始访问（无法跳过第一个元素访问任何一个元素）
* 无法通过下标直接访问元素，需要从头开始访问，直到找到对应的元素
* */

/*创建一个节点类*/
class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

export class LinkedList {
  constructor() {
    this.head = null  // 初始化 head 指向链表的第一个节点
    this.length = 0  // 记录列表的长度
  }

  /*链表的常用方法封装*/

  /*
  * 1. push 向链表尾部添加一个新元素
  * 2, insert(position,ele) 向特定位置添加一个特定的元素
  * 3. remove(element) 删除一个节点
  * 4. removeAt(position)从列表的特定位置移除一个元素
  * 5. get(position) 获取对应位置的元素
  * 6. indexOF 返回元素在链表中的索引，如果不存在就返回-1
  * 7. update(position)修改某个位置的元素
  *
  *
  * 8. isEmpty  链表元素为空返回true 否则非false
  * 9. size 返回链表的个数
  * 10. toString 返回整个链表的字符串 由于链表使用了 node 类 就需要重写继承自Javascript对象默认的toString 方法 让其输出 元素的值*/

  push(element) {

    const newNode = new Node(element)
    /* 判断 添加的是否是第一个节点*/
    if (!this.length) {  // 是第一个节点
      // 让head 指向第一个节点
      this.head = newNode

    } else {
      let currentNode = this.head

      // 当存在nextLink 的时候 一次把当前元素的 指针（链接） 复制给 currentNode
      while (currentNode.next !== null) {
        currentNode = currentNode.next
      }
      // 当不存在最后一个nextLink 的时候就是最后一个 完成添加
      currentNode.next = newNode
    }
    /* 完成添加之后 length +1 */
    this.length++
  }

  toString() {
    // 需要循环获取 节点 判断current 是否为空
    let current = this.head
    let str = ''
    while (current) {
      str += current.data + " "
      current = current.next
    }

    return str

  }

  insert(position, element) {
    //  对position 进行越界判断
    if (position < 0 || position> this.length) {
      return false
    }

    let newNode = new Node(element)
    // 插入到 position 等于 0 的位置
    /* 如果插入的是第一个元素*/
    if (position === 0) {
      newNode.next = this.head
      this.head = newNode
    }else{
      /* position 大于0*/
      let current = this.head
      let prevNode = null
      let index = 0
      while (index++ < position){
        prevNode =current
        current = current.next
      }
      current.next = newNode

    }

  this.length++
  }

}
