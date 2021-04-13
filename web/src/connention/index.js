
import io from "../../../node/node_modules/socket.io-client/dist/socket.io.js";
import OrderEventMqProvider from "@src/main/services/OrderEventMqProvider.js";

class Socket{
    constructor(){
        this._socket = null;
    }
    create(){
        if(this._socket){
            return this._socket;
        }
        this._socket = io.connect($CONSTANT.SERVER.ADDRESS);
        this._socket.on('order_event', (data) => {
            console.log("reecive data: ", data);
            let orderEventMqProvider = new OrderEventMqProvider();
            orderEventMqProvider.execute(data);
        });
        return this._socket;
    }
}   

export default new Socket();

