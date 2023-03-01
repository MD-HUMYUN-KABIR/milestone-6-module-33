/* 
1. what is an api
2.what are the http method supported by rest
3.can you use get request instead of put to create a resource
4.what is difference between put and post
5. what is json
6.what are crud operation
7. what is the file extension of json
8.what are the data types supported by json
9. what is the role of json.stringify
10.show how to parse a json 
*/

/* 
////what is ip address
an ip address is a unique address that identifies a device on the intenet or a local network. such as 208.65.153.238 youtube
66.220.149.25. facebook
72.21.211.176 amazon
173.0.84.3 paypal

//dns 
web browser - dns //dns theke ip address ney
web browser - hosting server // dns theke newa ip address die find


//what is http
http stands for 'hyper text transfer protocol'
it is a protocol for fetching resource such as html documents
it is the foundation of any data exchange on the web and it is a client-server protocol which means request are initiated by the reciepent,usually the web browser
*/
const stuInfo = JSON.stringify({ name: "James", roll: 3 }); 
console.log(stuInfo);
console.log(stuInfo.name);//undefined json srting convert korar por ar property declare kora jay na