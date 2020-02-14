let pets= []

function listarPet(){
    let contents = ""    
   pets.forEach((value)=>{
       contents+=`    
           --------------------
            nome: ${value}
            --------------------
       `
   })
   return contents
}
function buscarPet(nome){
  let busca =  pets.filter(value=>{
        return value == nome
    })
    
  let contents = "" 

    busca.forEach((value)=>{
        contents+=`
            --------------------
            nome: ${value}
            --------------------
       `
    })
    return contents

}

function addPet(nome){
    return pets.push(nome)
    
}

module.exports = {listarPet, buscarPet, addPet}