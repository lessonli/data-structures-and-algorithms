import { LinkedListSelf } from './linkedList';

// ---------------- 封装的单向链表结构测试 ---------------- //

// const linkedList = new LinkedList();

// // 测试 append 方法
// linkedList.append('AA');
// linkedList.append('BB');
// linkedList.append('CC');
// console.log(linkedList);

// // 测试 toString 方法
// console.log(linkedList.toString()); //--> AA BB CC

// // 测试 insert 方法
// linkedList.insert(0, '123');
// linkedList.insert(2, '456');
// console.log(linkedList.toString()); //--> 123 AA 456 BB CC

// // 测试 getData 方法
// console.log(linkedList.getData(0)); //--> 123
// console.log(linkedList.getData(1)); //--> AA

// // 测试 indexOf 方法
// console.log(linkedList.indexOf('AA')); //--> 1
// console.log(linkedList.indexOf('ABC')); //--> -1

// // 测试 update 方法
// linkedList.update(0, '12345');
// console.log(linkedList.toString()); //--> 12345 AA 456 BB CC
// linkedList.update(1, '54321');
// console.log(linkedList.toString()); //--> 12345 54321 456 BB CC

// // 测试 removeAt 方法
// linkedList.removeAt(3);
// console.log(linkedList.toString()); //--> 12345 54321 456 CC

// // 测试 remove 方法
// linkedList.remove('CC');
// console.log(linkedList.toString()); //--> 12345 54321 456

// // 测试 isEmpty 方法
// console.log(linkedList.isEmpty()); //--> false

// // 测试 size 方法
// console.log(linkedList.size()); //--> 3




//  测试 自己写的 链表

const linkedListSelf = new LinkedListSelf()

// linkedListSelf.append('李森')
linkedListSelf.append('李森')
linkedListSelf.append('李亚伟')
linkedListSelf.append('王启辉')
console.log(linkedListSelf.get(4), 'get');

console.log('linkedListSelf.indexOf(0)',linkedListSelf.indexOf('李森'), '')
const updateLinkedItem =  linkedListSelf.update(0, '李森森')
console.log(updateLinkedItem, 'updateLinkedItem');
console.log(linkedListSelf);
console.log(linkedListSelf.toString());


