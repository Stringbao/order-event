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
        this.$orderService = new OrderService();
        this._orderEventMqConsumer = new OrderEventMqConsumer();
        this.$orderService.register(this._orderEventMqConsumer);
    }

    notice(){}

    init(){
        ConnectionHelper.create();
        this._orderEventMqConsumer.start();
    }
}