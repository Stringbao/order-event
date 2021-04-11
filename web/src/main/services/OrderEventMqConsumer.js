
export default class OrderEventMqConsumer{
    constructor(){
        this._currentItem = null;
    }

    execute(){
        //get need to deal item from queue
        this._currentItem = $engine.$orderEventMQ.pop();
    }

    start(){
        window.setTimeout(()=>{
            this.execute();
            //update repsitory
            this._currentItem && $engine.$orderRepsitory.update(this._currentItem);
            this.start();
        }, $CONSTANT.LOOP.TIME)
    }
}