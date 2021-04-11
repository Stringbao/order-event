
export default class OrderEventMqProvider{
    constructor(){

    }

    execute(array){
        array.forEach(x => {
            $engine.$orderEventMQ.push(x);
        });
    }
}