import Factory from "./Factory";
import Order from "@model/Order.js";

export default class ModelFactory extends Factory {
    constructor(){
        super();
    }
}

ModelFactory.prototype[$CONSTANT.MODEL_TYPES.ORDER] = function(data){
    return new Order();
};