
export default class OrderEventMqConsumer {
    constructor() {
        this._currentItem = null;
        this._filterPrice = null;
        this._finallyResult = null;

        this._index = 0;
        this._pageSize = $CONSTANT.PAGEING.PAGE_SIZE;
    }

    execute() {
        //get need to deal item from queue
        this._currentItem = $engine.$orderEventMQ.pop();
    }

    getGroupData(source, index){
        let currentIndex = (index + 1) * this._pageSize;
        if(currentIndex >= source.length){
            return source;
        }
        let res = source.slice(0, currentIndex);
        return res;
    }

    start() {
        window.setTimeout(() => {
            this.execute();
            //update repsitory
            this._currentItem && $engine.$orderRepsitory.update(this._currentItem);
            //send message to view need to update
            this._finallyResult = $engine.$orderRepsitory.filter(this._filterPrice);
            //get render data
            let renderData = this.getGroupData(this._finallyResult, this._index);
            //bind render data
            vue.orderData = renderData;
            this.start();
        }, $CONSTANT.LOOP.TIME)
    }

    update(price) {
        this._index = 0;
        this._filterPrice = price;
    }

    loadMore(){
        this._index++;
    }
}