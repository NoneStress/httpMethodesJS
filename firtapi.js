const http = require('http')

const users = [
    {
        id:1,
        username:"nasser"
    },
    {
        id:2,
        username:"sarah"
    }
        ]

const server = http.createServer((req, res) => {
    const path = req.url
    res.statusCode = 200 

    if (req.method === "GET"){

        res.setHeader('Content-Type', 'application/json')
    
        switch(path){

            case ('/'):
                return res.end(JSON.stringify({message : "Bienvenue"}))
            case ("/users/"):
                return res.end(JSON.stringify(users))
            default:
                if(path.startsWith("/users")){

                    const urlParts = path.split("/")
                    const id = parseInt(urlParts[urlParts.length-1])
    
                    const user =(JSON.stringify(users.find(u => u.id === id)))
    
                    if(!user){
                        res.statusCode = 404
                        return res.end(JSON.stringify({error:'Utilisateur introuvable'}))
                    }
    
                    return res.end(user)
                } else {
                    res.statusCode = 404
                    res.end("error url")
                }

        }
    } else {
        res.statusCode = 404
        res.end("ERREURE 404")
    }
})

server.listen(3000, () =>{
    console.log('cest LANCEY')
    
})