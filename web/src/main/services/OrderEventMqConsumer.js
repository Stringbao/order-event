
export default class OrderEventMqConsumer {
    constructor() {
        this._currentItem = null;
        this._filterPrice = null;
        this._finallyResult = null;

        this._index = 0;
        this._pageSize = 2;
    }

    execute() {
        //get need to deal item from queue
        this._currentItem = $engine.$orderEventMQ.pop();
    }

    start() {
        window.setTimeout(() => {
            this.execute();
            //update repsitory
            this._currentItem && $engine.$orderRepsitory.update(this._currentItem);
            //send message to view need to update
            this._finallyResult = $engine.$orderRepsitory.filter(this._filterPrice);
            
            let groupList = this._finallyResult.group(this._pageSize);
            let renderData = groupList[this._index];
            renderData && order_core_tool.$event_publisher.broadcast($CONSTANT.EVENT_KEYS.ORDER.CHANGED, renderData);
            this.start();
        }, $CONSTANT.LOOP.TIME)
    }

    update(event) {
        this._filterPrice = event.price;
    }

    resetIndex(){
        this._index = 0;
    }

    loadMore(){
        this._index++;
    }
}