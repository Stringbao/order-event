
export default class OrderService{
    constructor(){

    }

    getData(){
        return $engine.$orderRepsitory._list;
    }

    filter(model){
        let price = model._price;
        let data = this.getData();
        let finallyResult = null;
        if(!price){
            finallyResult = data;
        }else{
            finallyResult = data.filter(x=>{
                return x.price == price;
            });
        }

        order_core_tool.$event_publisher.broadcast($CONSTANT.EVENT_KEYS.ORDER.CHANGED, finallyResult);
    }
}