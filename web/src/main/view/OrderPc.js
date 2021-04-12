
import ModelFactory from "@factory/ModelFactory.js";

export default class OrderPc{
    constructor(){
        this._containerEl = null;
        this._el = null;
        this._model = null;
    }

    appendItem(item){
        // let _orderModel = new ModelFactory().create($CONSTANT.MODEL_TYPES.ORDER);
        // _orderModel.init(data);
    }

    init(container){
        this._containerEl = container;
    }
}