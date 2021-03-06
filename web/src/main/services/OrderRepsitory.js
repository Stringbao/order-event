//data repsitory
export default class OrderRepsitory{
    constructor(){
        this._list = [];
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
        console.log("-----------------", this._list);
        vue.repository = this._list.length;
    }

    filter(price){
        if(price){
            return this._list.filter(x=>{
                return x.price == price;
            });
        } else {
            return this._list;
        }
    }
}