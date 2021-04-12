
export default{
    $Id(id){
        return document.getElementById(id);
    },
    create(container){

    },
    set(dom, val){
        dom.innerHTML = val;
    }
}