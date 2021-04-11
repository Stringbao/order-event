

export default class Order{
    constructor(){
        this._price = "";
        this._customer = "";
        this._destination = "";
        this._eventName = "";
        this._id = "";
        this._item = "";
        this._price = "";
        this._sent_at_second = "";
    }

    init(data){
        for(let i in data){
            this["_"+i] = data[i];
        }
    }
}