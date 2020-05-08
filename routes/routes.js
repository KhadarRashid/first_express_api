let express = require("express")
let router = express.Router()

router.get("/", function(req, res, next){
    res.json( {"message": "Hello to the whole World!"})
})

module.exports = router

