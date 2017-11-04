// function name(name) {
//     console.log('hi')
//
// }
//
// var name = (name) => {console.log('hi')}
/**
 * Getting the readline library and add it to the readline variable.
 * **/
const readline = require('readline');
var prompt = require('prompt-promise');


class Character{
    constructor(name, health, power){
    this.name = name;
    this.health = health;
    this.power = power;
}
    attack(){
        console.log();
    }
}

class Hero extends Character{
    constructor(name, health, power, critical){
        super(name, health, power)
        this.critical = critical;
    }
}
class Zombie extends Character{
    constructor(name, health, power, disintegrate){
        super(name,health,power)
        this.disintegrate = disintegrate;
    }
}

class UltraZombie extends Character{
    constructor(name, health, power, chaos){
        super(name, health, power)
        this.chaos = chaos;
    }
}

let hero = new Character ('ahmer', 10, 5);
let zombie = new Character ('eric', 15, 3);
let ultraZombie = new Character('aspen', 9001, 9001);

function main(){
    console.log("=====Welome to Hero RPG 2=====");
    console.log("Hero's health: "+hero.health);
    console.log("Zombie's health: "+zombie.health);
    console.log("Ultra Zombie's health: "+ultraZombie.health);
    console.log("===========================================");
    prompt('What do you want to do?\n 1. Fight Goblin\n 2. Fight Zombie\n 3. Fight Ultra Zombie\n 4. Do nothing\n 5. Flee')
        .then(function (ans) {
            if (ans == '1') {
                hero.attack(goblin);
                goblin.attack(hero);
            }
            else if (ans == '2'){
                hero.attack(zombie);
                zombie.attack(hero);
                console.log('hero never stood a chance.');
            }
            else if (ans == '3'){


            }
            else if (ans == '4'){
                zombie.attack(hero);

            }
            else if (ans == '5'){
                console.log('You fled. Never stood a chance anyways.')
                prompt.done();
            }
            else{
                console.log('Invalid input, try again.');
                main()
            }
})
        .catch(function rejected(err) {
                console.log('error:', err.stack);
                prompt.finish();
        });


}


main()