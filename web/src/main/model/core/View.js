
export default class BaseView{
    constructor(model){
        this._model = model;
        this._template = "";
    }

    setRootContainer(rootContainer){
        this._rootContainer = rootContainer;
    }

    render(){
        return Promise.resolve({html: this._template, view: this});
    }

    registerEvent($wrapper){
        let that = this;
        if (!that._eventCenter) return;

        let eventNams = ["click", "blur", "input"];
        eventNams.forEach(ename => {
            let tmp = "le" + ename;
            $wrapper && $wrapper.find("[" + tmp + "]").each((index, item) => {
                let eventHandlerName = $(item).attr(tmp);
                (function (dom, eventHandlerName) {
                    $(dom).off(ename).on(ename, function () {
                        that._eventCenter[eventHandlerName](this, {view: that})
                    });
                    if(ename == "click"){
                        $(dom).off("keydown").on("keydown", function(e){
                            if(e.keyCode == 13){
                                that._eventCenter[eventHandlerName](this, {view:that})
                            }
                        });
                    }
                })(item, eventHandlerName);
            })
        })
    }
}