let express = require("express")
let routes = require("./routes/routes")
let path = require("path")

let app = express()

app.use(express.static(path.join(__dirname, "hello-vue", "dist")))

app.use("/api", routes)

let server = app.listen(process.env.Port || 3000, function(){
    console.log("Express server running on port", this.address().port, app.settings.env)
})