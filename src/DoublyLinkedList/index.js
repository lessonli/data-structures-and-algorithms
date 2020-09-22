
import {DoublyLinkedList} from './doublyLinkedList'

const doublyLinkedList = new DoublyLinkedList()

doublyLinkedList.append('aa')
doublyLinkedList.append('bb')
console.log(doublyLinkedList)

console.log(doublyLinkedList.forwardString())
console.log(doublyLinkedList.backwordString())
console.log(doublyLinkedList.toString())
