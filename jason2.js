//go what is an api
const user = {id:1,name:'garib aamir', job:'actor'}
const stringified = JSON.stringify(user);
console.log(stringified);//{"id":1,"name":"garib aamir","job":"actor"} number and boolean chara baki sob gula k double qoutation die dey
//
const shop = {
    owner:'alia',
    address:{
        street:'kachukhet',
        city:'ranbir',
        country:'bd'
    },
    products: ['laptop','mic','monitor','keyboard'],
    revenue:45000,
    isOpen:true,
    isNew:false
};
const shopjson = JSON.stringify(shop);
console.log(shopjson)// string banailam 
const shopjsonObject = JSON.parse(shopjson);
console.log(shopjsonObject);//abar string k object banailam