const domains = {
    home:{
        type:1,
        environment:{
            dev:"www.orderuat.cn",
            uat:"www.orderuat.com",
            pro:"www.order.com"
        }
    }
}

let DOMAIN = {
    domains:domains,
    getCurrentItem(domain){
        let res = {item:null,envi:""};
        for(let i in domains){
            let _item = domains[i].environment;
            for(let k in _item){
                if(_item[k].split(',').includes(domain)){
                    res.item = _item;
                    res.envi = k;
                }
            }
        }
        return res;
    },
    getItemByType(type){
        if(!type){
            type = 1;
        }
        let res = null;
        for(let i in domains){
            if(domains[i].type == type){
                res = domains[i].environment;
            }
        }
        return res;
    },
    getRandomUri(uris, prefix){
        let arr = uris.split(',');
        if(arr.length == 1){
            return !prefix?"//" + uris:uris;
            
        }else{
            let _tmp = arr[flash_fe_core_tool.$util.$coreMethods.randomNum(0, arr.length -1)];
            return !prefix?"//" + _tmp:_tmp;
        }
    },
    getDomain(type, uriprefix){
        let currentItem = DOMAIN.getCurrentItem(document.domain);
        let item = DOMAIN.getItemByType(type);
        return DOMAIN.getRandomUri(item[currentItem.envi], uriprefix);
    }
}

export default DOMAIN;