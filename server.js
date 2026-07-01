http = require('http')

const server = http.createServer((req, res) => {

    const path = req.url

    res.statusCode === 200;

    res.setHeader('Content-Type', 'text/plain');

    if(path === '/'){
        res.end(JSON.stringify({
                    message : 'Bienvenue sur mon API'
                }))
    } else if(path === '/users'){
        res.end(JSON.stringify([
    {
        id:1,
        username:"nasser"
    },
    {
        id:2,
        username:"sarah"
    }
]))
    }
})

server.listen(3000, ()=>{
    console.log("Serveeeur lancey")
})