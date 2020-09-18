import {PriorityQueue} from './priorityQueue.js'

/* 优先级丢列的测试demo*/

const prioriteQueue = new PriorityQueue()

prioriteQueue.enqueue('a',10)
prioriteQueue.enqueue('b',12)
prioriteQueue.enqueue('c',11)
prioriteQueue.enqueue('d',15)
prioriteQueue.enqueue('e',8)
console.log(prioriteQueue.item)
/* 0: QueueElement {element: "e", priorite: 8}
1: QueueElement {element: "a", priorite: 10}
2: QueueElement {element: "c", priorite: 11}
3: QueueElement {element: "b", priorite: 12}
4: QueueElement {element: "d", priorite: 15}
length: 5
* */


