// 封装节点类
export class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// 单向链表结构的封装
export class LinkedList {

  constructor() {
    // 初始链表长度为 0
    this.length = 0;

    // 初始 head 为 null，head 指向链表的第一个节点
    this.head = null;
  }
  // ------------ 链表的常见操作 ------------ //

  // append(data) 往链表尾部追加数据
  append(data) {
    // 1、创建新节点
    const newNode = new Node(data);

    // 2、追加新节点
    if (this.length === 0) {
      // 链表长度为 0 时，即只有 head 的时候
      this.head = newNode;
    } else {
      // 链表长度大于 0 时，在最后面添加新节点
      let currentNode = this.head;

      // 当 currentNode.next 不为空时，
      // 循序依次找最后一个节点，即节点的 next 为 null 时
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }

      // 最后一个节点的 next 指向新节点
      currentNode.next = newNode;
    }

    // 3、追加完新节点后，链表长度 + 1
    this.length++;
  }

  // insert(position, data) 在指定位置（position）插入节点
  insert(position, data) {
    // position 新插入节点的位置
    // position = 0 表示新插入后是第一个节点
    // position = 1 表示新插入后是第二个节点，以此类推

    // 1、对 position 进行越界判断，不能小于 0 或大于链表长度
    if (position < 0 || position > this.length) return false;

    // 2、创建新节点
    const newNode = new Node(data);

    // 3、插入节点
    if (position === 0) {
      // position = 0 的情况
      // 让新节点的 next 指向 原来的第一个节点，即 head
      newNode.next = this.head;

      // head 赋值为 newNode
      this.head = newNode;
    } else {
      // 0 < position <= length 的情况

      // 初始化一些变量
      let currentNode = this.head; // 当前节点初始化为 head
      let previousNode = null; // head 的 上一节点为 null
      let index = 0; // head 的 index 为 0

      // 在 0 ~ position 之间遍历，不断地更新 currentNode 和 previousNode
      // 直到找到要插入的位置
      while (index++ < position) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }

      // 在当前节点和当前节点的上一节点之间插入新节点，即它们的改变指向
      newNode.next = currentNode;
      previousNode.next = newNode;
    }

    // 更新链表长度
    this.length++;
    return newNode;
  }

  // getData(position) 获取指定位置的 data
  getData(position) {
    // 1、position 越界判断
    if (position < 0 || position >= this.length) return null;

    // 2、获取指定 position 节点的 data
    let currentNode = this.head;
    let index = 0;

    while (index++ < position) {
      currentNode = currentNode.next;
    }

    // 3、返回 data
    return currentNode.data;
  }

  // indexOf(data) 返回指定 data 的 index，如果没有，返回 -1。
  indexOf(data) {
    let currentNode = this.head;
    let index = 0;

    while (currentNode) {
      if (currentNode.data === data) {
        return index;
      }
      currentNode = currentNode.next;
      index++;
    }

    return -1;
  }

  // update(position, data) 修改指定位置节点的 data
  update(position, data) {
    // 涉及到 position 都要进行越界判断
    // 1、position 越界判断
    if (position < 0 || position >= this.length) return false;

    // 2、痛过循环遍历，找到指定 position 的节点
    let currentNode = this.head;
    let index = 0;
    while (index++ < position) {
      currentNode = currentNode.next;
    }

    // 3、修改节点 data
    currentNode.data = data;

    return currentNode;
  }

  // removeAt(position) 删除指定位置的节点，并返回删除的那个节点
  removeAt(position) {
    // 1、position 越界判断
    if (position < 0 || position >= this.length) return null;

    // 2、删除指定 position 节点
    let currentNode = this.head;
    if (position === 0) {
      // position = 0 的情况
      this.head = this.head.next;
    } else {
      // position > 0 的情况
      // 通过循环遍历，找到指定 position 的节点，赋值到 currentNode

      let previousNode = null;
      let index = 0;

      while (index++ < position) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }

      // 巧妙之处，让上一节点的 next 指向到当前的节点的 next，相当于删除了当前节点。
      previousNode.next = currentNode.next;
    }

    // 3、更新链表长度 -1
    this.length--;

    return currentNode;
  }

  // remove(data) 删除指定 data 的节点，并返回删除的那个节点
  remove(data) {
    return this.removeAt(this.indexOf(data));
  }

  // isEmpty() 判断链表是否为空
  isEmpty() {
    return this.length === 0;
  }

  // size() 获取链表的长度
  size() {
    return this.length;
  }

  // toString() 链表数据以字符串形式返回
  toString() {
    let currentNode = this.head;
    let result = '';

    // 遍历所有的节点，拼接为字符串，直到节点为 null
    while (currentNode) {
      result += currentNode.data + ' ';
      currentNode = currentNode.next;
    }

    return result;
  }
}


// 封装节点类
export class Node1 {
  constructor(ele) {
    this.ele = ele;
    this.next = null;
  }
}
export class LinkedListSelf {
  
  constructor(){
    this.length = 0;
    this.head = null
  }
  

  // 构建内置类 该实验性语法 暂不支持
  // Node1 = class {
  //   constructor(ele){
  //     this.ele = ele
  //     this.next = null
  //   }
  // }

  append(ele){
    let newNode = new Node1(ele);

    // 如果链表中元素为空 则直接添加
    if(this.head=== null){
      this.head = newNode
      
    } else {
     let current = this.head
    //  循环列表一直查到最后一项 如果 next 为空了 则代表 该链表到尾部了 
     while (current.next) {
       current = current.next
     }
    //  将最后一项 的next 指向最后一个 建立链接
     current.next = newNode
    
    }
    this.length++

  }

  /**
   * 
   * @param {*} position 删除的位置
   * @returns isDeleted ele
   */
  removaAt(position){
   
    // 判断边界值 如果 超出边界 则 为 null
    if(position > -1 && position < this.length) {
      let currentNode = this.head;
      if(position === 0){
        this.head = currentNode.next
      } else{
        // 删除第一个 之外的元素
        let previous = null;
        let index = 0;
        while (index++ < position) {
          previous = currentNode
          currentNode = currentNode.next
          
        }
        console.log(previous, 'previous');
        previous.next = currentNode.next
      }
      this.length--
      return currentNode.ele
    } else {
      return null
    }
    
  }

  insert(position, ele){
    // 在边界范围内
    if(position >= 0 && position < this.length){
      let node = new Node1(ele)
      let current = this.head
      let previous = null
      let index = 0
      if(position === 0){
        node.next = current
        this.head = node
      } else {
        // 一直循环到当前的位置
        while (index ++ < position) {
          previous = current
          current = current.next
        }
        node.next = current
        previous.next = node
      }
      this.length++ 
      return true
    } else{
      return false
    }
  }

  /**
   * 
   * @param {number} position 
   * @returns 
   * @description 从0 开始
   */
  get(position){
    // 判断边界权限
    if(position> -1 && position < this.length){
      let index = 0
      let current = this.head // 保存 当前 指针的引用
      while (index++ < position) {
        current = current.next
      }
      // 跳出循环表示 查找到了
      return  current.ele
    } else {
      return null
    }
  }
  
  /**
   * 
   * @param {ele} ele 
   * @return {number} num | -1
   */
  indexOf(ele){
    let index = 0
    let current = this.head
    
    while (current) {
      if(current.ele === ele){
        return index
      }
      current = current.next
      index++
    }
    return -1
  }

  isEmpty(){
    return this.length === 0? true: false
  }

  size(){
    return this.length
  }

  // 更新某个节点的值
  update(position, ele){
    if(position > -1 && position < this.length){
      let index = 0
      let current = this.head
      while (index ++ < position) {
        current = current.next
      }
      current.ele = ele
      return current

    } else {
      // 越界了 返回false
      return false
    }
  }
/**
 * 
 * @param {*} ele 
 * @desc 传入的元素存在就删除该节点
 */
  remove(ele){
    this.removaAt(this.indexOf(ele))
  }

  // 因为 js 内置了 该方法 我们需要拦截掉
  toString(){
    let current = this.head
    let res = ''
    while (current) {
      res+= current.ele+' '
      current = current.next
    }
    return res
  }

}

