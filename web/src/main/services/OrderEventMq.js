
//消息队列，存储所有未处理的数据
export default class OrderEventMQ{
    constructor(){
        this._list = [];
    }

    push(item){
        console.log("push data to message queue");
        this._list.push(item);
    }

    pop(){
        let item = this._list.shift();
        console.log("remove item:", item);
        return item;
    }
}
