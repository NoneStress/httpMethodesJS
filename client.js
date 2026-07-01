 fetch("http://localhost:3000/login", {
        method: "POST",
        headers:{
            'Content-Type': "application/json"
        },

        body: JSON.stringify({
            username: "sarah",
            password: "abcdef"
        })
    }).then(data => {
        return data.json()
    }).then(data => console.log(data))