
export default{
    $Id(id){
        return document.getElementById(id);
    },
    setTrHtml(tr, item){
        let html = "";
        for(let i in item){
            html += `<td>${item[i]}</td>`;
        }
        tr.innerHTML = html;
    },
    createTr(item, container){
        let tr = document.createElement("tr");
        this.setTrHtml(tr, item);
        container.appendChild(tr);
    },
    removeTrs(tbody){
        let list = tbody.children;
        for (let index = 0; index < list.length; index++) {
            tbody.removeChild(list[index]);
        }
    },
    set(dom, val){
        dom.innerHTML = val;
    }
}