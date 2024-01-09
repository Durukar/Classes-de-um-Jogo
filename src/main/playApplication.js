const Hero = require("./models/Hero")
const HeroService = require("./services/HeroService")
const heroService = new HeroService();

let lucas;

try {
    lucas = new Hero("Lucas", "Mage")
} catch (error) {
    console.log(error.message)
}

heroService.atack(lucas.getClass, lucas.getNivel);