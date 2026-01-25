import http from 'http'
import url from 'url'


function createApp(){

    // defining states
    const routes={
        GET:{},
        POST:{}
    }
    // an object in order to have the behaviour
    const app={}
    // defining the behaviour
    app.get=(path,handler)=>{
       routes.GET[path]=handler
    }
    app.post=(path,handler)=>{
         routes.POST[path]=handler

    }
    app.listen=(port,cb)=>{
        const server=http.createServer((req,res)=>{
            const parsedURL=url.parse(req.url)
            const method=req.method
            const pathName=parsedURL.pathname
            if( routes[method] && routes[method][pathName])
            {
             const handler= routes[method][pathName]
              handler(req,res)
            }
            else{
                res.writeHead(404)
                res.end(' Thnx, an error occured')
            }
            

        })
        server.listen(port,
            console.log("Hey dear I am ready to listen to your query at port ",port)
        )

    }
    return app
}

const app=createApp()
app.get('/',(req,res)=>{
    res.end(' Hello from the home page ')
})
app.get('/user',(req,res)=>{
    res.end(' Hello from the user page ')
})
app.listen(3000);

