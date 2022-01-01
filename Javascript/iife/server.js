((express,server, bodyParser,fs)=>{
    server.use(bodyParser.urlencoded({extended:true}))
    // server.use(express.static)
    server.get('/',(req,res)=>{
        fs.readFile("./templates/home.html", "utf8", (err, results)=>{
            res.send(results)
        })
    })
    server.listen(8000, (err)=>{
        console.log(err || "server is ready at 8000...");
    })
})(
    require("express"),
    require("express")(),
    require('body-parser'),
    require('fs')
)