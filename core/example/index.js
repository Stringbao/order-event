import tool from "../core.js";

// let productCodes = "20NKS2H60H,20KNSH2Y00,20CG004WUS";
// tool.$queryProducts(productCodes)
// .then(res => {
//     console.log(res)
// }).catch(err => {
//     console.log(err)
// })

debugger
tool.$productPrice.price('20U9005NUS,20T6S03000,20N7S0AT00,45J7915', 2).then(x=>{
    debugger
    console.log(x);
}).catch(e=> {
    debugger
    console.log(e);
})