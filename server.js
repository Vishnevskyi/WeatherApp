const express = require('express')
const port = 4000
const cors = require('cors')
const app = express()
const multer = require("multer")
const upload = multer()
app.use(cors())
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(upload.array())
app.use(express.static("public"))
app.use(require("./router/router"))
app.use(function (req, res, next) {
    res.status(404).send("Sorry cant find that!");
    next()
  });
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})
