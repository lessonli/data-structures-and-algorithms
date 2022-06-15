
import Queue from "./queue";

export const hotPotato = (nameList, num)=>{
  // 根据先入先入 把 名单依次放入到队列当中
  let queue = new Queue()
  nameList.forEach(element => {
    queue.enqueue(element)
  });
  let eliminated = '' // 被淘汰的人
  // 当传递次数 达到 传递次数的时候 淘汰当前这个人
  while (queue.size()>1) {
    // 之所以从 1 开始 是因为 num 从1 到num 
    for (let i = 0; i < num; i++) {
      // 每传递一个都把 最前面的出队 放到最后 入队 
      queue.enqueue(queue.dequeue())
    }
    // 到了 num 这个次数的时候直接淘汰 出队就好了 每次淘汰的人
    eliminated = queue.dequeue()
    console.log(eliminated, '淘汰');
  }
  console.log(queue, 'queue');
  return queue.peek()
}