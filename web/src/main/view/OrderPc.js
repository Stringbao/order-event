
import ModelFactory from "@factory/ModelFactory.js";

export default class OrderPc{
    constructor(){
        this._containerEl = null;
        this._el = null;
        this._modelList = [];

        this._tbodyEl = order_core_tool.$domHelper.$Id("tbody");
        this._priceEl = order_core_tool.$domHelper.$Id("price");
    }

    checkTrExist(item){
        let result = {tr:null, exist:false, data:null};
        let trs = order_core_tool.$domHelper.$Id("tbody").children;
        for (let index = 0; index < trs.length; index++) {
            let tds = trs[index].children;
            for (let tdIdx = 0; tdIdx < tds.length; tdIdx++) {
                const td = tds[tdIdx];
                if(td.innerHTML == item.id){
                    result.exist = true;
                    result.tr = trs[index];
                    result.data = item;
                }
            }
        }
        return result;
    }

    appendItem(items){
        this._currentModelList = items;
        items.forEach(x => {
            let result = this.checkTrExist(x);
            if(result.exist){
                order_core_tool.$domHelper.setTrHtml(result.tr, result.data);
            }else{
                order_core_tool.$domHelper.createTr(x, this._tbodyEl);
            }
        });
        // let _orderModel = new ModelFactory().create($CONSTANT.MODEL_TYPES.ORDER);
        // _orderModel.init(data);
    }

    init(){
        let that = this;
        this._priceEl.addEventListener("input",function(event){
            $engine.$orderService.filter({_price:that._priceEl.value});
            order_core_tool.$domHelper.removeTrs(that._tbodyEl);
        },false)
    }
}
