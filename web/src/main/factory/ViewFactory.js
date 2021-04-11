import Factory from "./Factory";
import Constant from "@constant/index.js";

/*********************  PC *********************************/
import OrderPC from "@view/OrderPC.js";

/*********************  Mobile *********************************/
import OrderMobile from "@view/OrderMobile.js";

/********************* tablet *********************************/
import OrderTablet from "@view/OrderTablet.js";

const createViewByType = (pcType, mobileType, tabletType, data) => {
    let model = data.model;
    let obj = new pcType(model);
    switch(data.deviceType){
        case $CONSTANT.TERMINAL.MOBILE:
            obj = new mobileType(model);
            break;
        case $CONSTANT.TERMINAL.TABLET:
            obj = new tabletType(model);
            break;
    }
    return obj;
};

export default class ViewFactory extends Factory{
    constructor(){
        super();
    }
}

ViewFactory.prototype[Constant.MODEL_TYPES.ORDER] = (data) => {
    return createViewByType(OrderPC, OrderMobile, OrderTablet, data);
};