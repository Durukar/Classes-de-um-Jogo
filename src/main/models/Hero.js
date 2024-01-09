//#region Imports
const Class = require("./Class")
//#endregion

class Hero {
    #name
    #class
    #nivel = 1

    constructor(nome, classe) {
        this.#name = nome;
        if (Object.values(Class).includes(classe)) {
            this.#class = classe;
        } else {
            throw new Error("Classe inválida. As classes disponíveis são: " + Object.values(Class).join(", "));
        }
        
        console.log(`Heroi ${this.#name} criado com sucesso e esta no nivel ${this.#nivel}`)
    }

    get getClass () {
        return this.#class
    }

    get getNivel() {
        return this.#nivel
    }

    toString() {
    }
}

module.exports = Hero;