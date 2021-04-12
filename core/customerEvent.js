
export default class customerEvent{
    constructor(){
        this._dict = {};
    }

    register(key,fn){
        if(!this._dict[key]){
            this._dict[key] = fn;
        }
    }

    on(key){
        return this._dict[key];
    }
}