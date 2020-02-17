const http = require('http');
const petshop = require('./petshop');
const url = require('url')

const server = http.createServer(function(req, res){
    
    let urlCompleta = url.parse(req.url, true)
    let queryString = urlCompleta.query
    let rota = urlCompleta.pathname
   
    if(rota == "/pet/lista"){
        let lista= petshop.listarPet();
        return res.end(lista)
    }

    if(rota == '/pet/add'){
        if(petshop.addPet(queryString.petNome)){
                res.write("Nome: "+ queryString.petNome + "\n")
                res.end()
        }
    }  
    
    if(rota == '/pet/buscar'){
        let pet = petshop.buscarPet(queryString.petNome)
        if(pet){
            return res.end(pet)
        }else {
            return res.end("Pet não encontrado!")
        }
    }


    res.write("Seja bem vindo ao sistema PetShop")
    return res.end();

})



server.listen(3030, 'localhost', ()=>{
    console.log("Servidor iniciado")
})