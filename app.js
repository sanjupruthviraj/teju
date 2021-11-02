let express = require("express")

let ourApp = express()
ourApp.use(express.urlencoded({extended : false }))
ourApp.get( "/", function( req , res ){ 
    res.send (`
    <form action = "/answer"  method = "POST" > 
    <p> what is the skyColor in clean sunny day </p>
    <input name = "skyColor" autoComplete = "off">
    <button> Submit answer </button>
    </form>
    
    `)
})

ourApp.post("/answer", function( req , res ){
    if (req.body.skyColor == "blue"){
    res.send(`
    <p> congrats, that is correct answer! </p>
    <a href ="/" > back to home pag </a>
    `)

    } else {
        res.send(`
        <p> Sorry , that is incorrect answer </p>
        <a href ="/" > back to home pag </a>
        `)
    }    
    
})

ourApp.listen(3000)