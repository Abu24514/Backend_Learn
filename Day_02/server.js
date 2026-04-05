const express = require("express"); // Express module import kar rahe hain

const app = express(); // Express app create kar rahe hain (Ye hi hamara server hai)

/*
GET Route create kar rahe hain

app.get() → GET request handle karta hai
"/home" → URL route hai
(req, res) → request & response object
*/

app.get("/home", (req, res) => {
  res.send("hii I am a home"); // Browser ko response bhej rahe hain
});

/*
About Route create kar rahe hain
Jab user /about route open karega
Ye function run hoga
*/
app.get("/about", (req, res) => {
  res.send("hii I am a about"); // Browser me response bhej rahe hain
});
/*
Server start kar rahe hain

3000 → Port number
Callback function server start hone ke baad run hoga
*/
app.listen(3000, () => {
        // Terminal me message show karega
  console.log("Server is running at port 3000");
});
