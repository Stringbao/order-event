export default class OrderEventMqConsumer {
    constructor() {
        this._currentItem = null;
        this.filterPrice = null;
        this.needFilterFlag = false;
        this.finallyResult = null;
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
            this.finallyResult = $engine.$orderRepsitory.filter(this.filterPrice);
            this.finallyResult.length > 0 && order_core_tool.$event_publisher.broadcast($CONSTANT.EVENT_KEYS.ORDER.CHANGED, this.finallyResult);

            this.start();
        }, $CONSTANT.LOOP.TIME)
    }

    update(event) {
        this.filterPrice = event.price;
    }
}