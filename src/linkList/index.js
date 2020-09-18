
import {LinkedList} from './linkList'

const linkedList = new LinkedList()

linkedList.push('aa')
linkedList.push('bb')
linkedList.push('cc')
linkedList.push('dd')
linkedList.push('ee')
linkedList.push('ff')
linkedList.push('gg')
console.log(linkedList)
console.log(linkedList.toString());
console.log(linkedList.insert(3, 22));
