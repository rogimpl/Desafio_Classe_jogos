class heroCod{
	constructor(nome, idade,tipo){
    this.nome = nome
    this.idade = idade
    this.tipo= tipo
    }
    atacar() {
        let ataque = ""
    
        if (this.tipo == "guerreiro") {
          ataque = "espada"
        } else if (this.tipo == "monge") {
          ataque = "artes marcias"
        } else if (this.tipo == "mago") {
          ataque = "magia"
        } else if (this.tipo == "ninja") {
          ataque = "shuriken"
        }
    
        console.log(`O ${this.tipo} atacou usando ${ataque}`)
      }
    }



let newatack = new heroCod ("Bruce",26,"mago")
newatack.atacar()