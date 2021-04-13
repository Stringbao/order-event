export default class OrderService{
    constructor(){
        this.obList = [];
    }

    getData(){
        return $engine.$orderRepsitory._list;
    }

    filter(model){
        for(var index = 0; index < this.obList.length; index++){
            this.obList[index].update({price:model._price});
        }
    }

    register(ob){
        this.obList.push(ob);
    }
}