const { error } = require("console");
const http = require("http");

const server = http.createServer((req,res) => {
    if(req.method === "POST" && req.url === "/login"){
        res.statusCode = 200;

        res.setHeader('Content-Type','application/json')

        let body = "";

        req.on("data", (chunk) =>{
            body += chunk
        })

        req.on("end", () => {
            const data = JSON.parse(body)
            console.log(data)
            res.end(JSON.stringify({
                message:'Login recu'
            }))
        })

    } else {
        res.statusCode = 400;
        res.end(JSON.stringify({error: "BIG ERROR"}))
    }
})

server.listen(3000, ()=>{
    console.log("Seems fine")

})