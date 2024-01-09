const Class = require("../models/Class")
class HeroService {
    atack (classe, nivel) {
        switch (classe) {
            case Class.Mage:
                console.log("O Mago atacou usando Magia")
                break;
            case Class.Monk:
                console.log("O Monge atacou usando artes marciais")
                break;
            case Class.Ninja:
                console.log("O Ninja atacou usando uma katana")
                break;
            case Class.Warrior:
                console.log("O Guerreiro atacou usando espada")
                break
            default:
                break
        }
    }
}

module.exports = HeroService;