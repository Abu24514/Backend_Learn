const http = require('http');
/* 
- http Node.js ka built-in module hai.
- require('http') se hum us module ko import karte hain.

USE:- server banane ke liye hota hai
*/
const server = http.createServer((req ,res)=>{
res.end("Hello ji How are you from the server?")
}); 

/* 
-  http.createServer() :- Ye server create karta hai.
- (req, res):--- 
            <----   
- req -→ request (client kya maang raha hai).
- res -→ response (server kya bhejega)        
- end() = response send karke close kar deta hai
*/
server.listen(4000,()=>{
    console.log("server is runnig port on  4000");  
})
/* 
Ye server ko start karta hai----
-- 4000 = port number
-- Server localhost:4000 par chalega
*/