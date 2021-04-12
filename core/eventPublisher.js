export default class EventPublisher{
    constructor() {
        this.eventCallbackDictionary = {};
    }
    on(eventName, callback) {
        if(!this.eventCallbackDictionary[eventName]){
            this.eventCallbackDictionary[eventName] = [];
        }
        if(!callback["eventKey"]){
            callback["eventKey"] = eventName;
            this.eventCallbackDictionary[eventName].push(callback);
        }
    }
    broadcast(eventName, data) {
        for (let i in this.eventCallbackDictionary) {
            if (i == eventName && this.eventCallbackDictionary[eventName] && this.eventCallbackDictionary[eventName] instanceof Array) {
                this.eventCallbackDictionary[eventName].forEach(x => {
                    x(data);
                });
            }
        }
    }
}