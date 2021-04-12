import ViewFactory from "@factory/ViewFactory.js";
import ConnectionHelper from "@src/connention/index.js";

import OrderEventMQ from "@src/main/services/OrderEventMQ.js";
import OrderEventMqConsumer from "@src/main/services/OrderEventMqConsumer.js";
import OrderRepsitory from "@src/main/services/OrderRepsitory.js";
import OrderService from "@src/main/services/OrderService.js";

export default class Engine {
    constructor(){
        this._deviceType = -1;

        this.$orderEventMQ = new OrderEventMQ();        
        this.$orderRepsitory = new OrderRepsitory();    
        this._orderService = new OrderService();
        this._orderEventMqConsumer = new OrderEventMqConsumer();

        this.$orderRepsitory.register(this._orderService);
    }

    notice(){}

    init(deviceType, rootContainer){
        ConnectionHelper.create();
        this._orderEventMqConsumer.start();

        let _orderView = new ViewFactory().create($CONSTANT.MODEL_TYPES.ORDER,{deviceType:deviceType});
        _orderView.init(order_core_tool.$domHelper.$Id("rootContainer"));
        
        order_core_tool.$event_publisher.on($CONSTANT.EVENT_KEYS.ORDER.CHANGED, (x)=>{
            _orderView.appendItem(x);
        })
    }
}