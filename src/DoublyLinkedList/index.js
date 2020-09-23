
import {DoublyLinkedList} from './doublyLinkedList'

const doublyLinkedList = new DoublyLinkedList()

doublyLinkedList.append('aa')
doublyLinkedList.append('bb')
// console.log(doublyLinkedList)

// console.log(doublyLinkedList.forwardString())
// console.log(doublyLinkedList.backwordString())
// console.log(doublyLinkedList.toString())


doublyLinkedList.insert(0,"dd")
// console.log(doublyLinkedList)
doublyLinkedList.insert(1,"aaa")
// console.log(doublyLinkedList)
doublyLinkedList.insert(5,"ssssssssss")

console.log(doublyLinkedList.get(0))
console.log(doublyLinkedList.get(2))