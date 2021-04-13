export default class OrderService{
    constructor(){
        this.obList = [];
    }

    getData(){
        return $engine.$orderRepsitory._list;
    }

    filter(price){
        for(var index = 0; index < this.obList.length; index++){
            this.obList[index].update(price);
        }
    }

    loadMore(){
        for(var index = 0; index < this.obList.length; index++){
            this.obList[index].loadMore();
        }
    }

    resetIndex(){
        for(var index = 0; index < this.obList.length; index++){
            this.obList[index].resetIndex();
        }
    }

    register(ob){
        this.obList.push(ob);
    }
}