
import ViewModel from "@helper/ViewModel.js";

//data repsitory
export default class OrderRepsitory{
    constructor(){
        this._list = [];
        this._obervsers = [];
    }

    register(observer){
        this._obervsers.push(observer);
    }

    update(item){
        let exist = false;
        this._list.forEach((x,idx)=>{
            if(x.id == item.id){
                this._list[idx] = item;
                exist = true;
            }
        })
        if(!exist){
            this._list.push(item);
        }

        this._obervsers.forEach(x=>{
            let vm = new ViewModel();
            vm.init(order_core_tool.$domHelper.$Id("price").value);
            x.filter(vm);
        })
    }
}

