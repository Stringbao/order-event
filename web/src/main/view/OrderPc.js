import ModelFactory from "@factory/ModelFactory.js";
export default class OrderPc {
    constructor() {
        this._containerEl = null;
        this._el = null;
        this._currentList = [];
        this._oldList = [];

        this._tbodyEl = order_core_tool.$domHelper.$Id("tbody");
        this._priceEl = order_core_tool.$domHelper.$Id("price");
        this._loadMoreEl = order_core_tool.$domHelper.$Id("loadmore");
    }

    checkTrExist(item) {
        let result = {
            tr: null,
            exist: false,
            data: null
        };
        let trs = order_core_tool.$domHelper.$Id("tbody").children;
        for (let index = 0; index < trs.length; index++) {
            let tds = trs[index].children;
            for (let tdIdx = 0; tdIdx < tds.length; tdIdx++) {
                const td = tds[tdIdx];
                if (td.innerHTML == item.id) {
                    result.exist = true;
                    result.tr = trs[index];
                    result.data = item;
                }
            }
        }
        return result;
    }

    appendItem(items) {
        let bl = this._oldList.equals(items);
        if(bl){
            return;
        }
        if(this._oldList.length > items.length){
            order_core_tool.$domHelper.removeTrs(this._tbodyEl);
        }
        items.forEach(x => {
            let result = this.checkTrExist(x);
            if (result.exist) {
                console.log("reRender data is:", result.data);
                order_core_tool.$domHelper.setTrHtml(result.tr, result.data);
            } else {
                console.log("append render data is:", x);
                order_core_tool.$domHelper.createTr(x, this._tbodyEl);
            }
        });
        this._oldList = JSON.parse(JSON.stringify(items));
        // let _orderModel = new ModelFactory().create($CONSTANT.MODEL_TYPES.ORDER);
        // _orderModel.init(data);
    }

    init() {
        let that = this;
        this._priceEl.addEventListener("input", function (event) {
            order_core_tool.$domHelper.removeTrs(that._tbodyEl);
            $engine.$orderService.resetIndex();
            $engine.$orderService.filter({
                _price: that._priceEl.value
            });
        }, false)

        this._loadMoreEl.addEventListener("click", function (event) {
            $engine.$orderService.loadMore();
        }, false)
    }
}