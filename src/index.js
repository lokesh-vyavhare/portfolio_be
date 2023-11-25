const express = require('express');
const path = require("path");
const app = express();

app.use(express.static("src/static"));
const router = express.Router();

router.get('/*', (req, res)=>{
    const options = {
        root:path.join(__dirname + "/private")
    }
    res.sendFile('nopage.html', options,  (err)=>{
        if (err) res.status(500).send("error");
    })
})
app.use('/', router);
app.listen(8080, ()=>{
    console.log("URL: http://localhost:8080")
})