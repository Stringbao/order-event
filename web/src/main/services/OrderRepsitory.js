
import ViewModel from "@helper/ViewModel.js";
import DomHelper from "@helper/DomHelper.js";

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
        let result = {exist:false, item:null};
        this._list.forEach(x=>{
            if(x.id == item.id){
                result = {exist:true, item:x};;
            }
        })
        if(result.exist){
            result.item = item;
        }else{
            this._list.push(item);
        }

        this._obervsers.forEach(x=>{
            let vm = new ViewModel();
            vm.init(DomHelper.$Id("price").value);
            debugger
            x.filter(vm);
        })
    }
}

