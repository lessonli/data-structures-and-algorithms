import Queue from "./queue.js";

/*
* nameList: 传入的名字列表
* targetNumber: 要停止的数字
* */
export default function passGame(nameList, targetNumber = 0) {
  let queue = new Queue()
  // 所有的nameList 加入到队列
  for (let i = 0; i < nameList.length; i++) {
    queue.enqueue(nameList[i])
  }

  // 不确定循环的次数用while
  while (queue.size() > 1) {
    /* 开始数数 把每一个出队的 在入队 遵循 先入先出 */
    for (let i = 0; i < targetNumber - 1; i++) {
      /* 把目标元素之前的先取出来 在追加到队列中去*/
      queue.enqueue(queue.dequeue());
    }
    queue.dequeue()
  }
  let winnerName = queue.peek()
  return nameList.indexOf(winnerName)
}
