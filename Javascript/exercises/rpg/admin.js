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
    take_damage(name, damage) {
        this.health -= damage
        console.log(`${this.name} took ${damage} damage from ${name}.`); //

    }
    attack(enemy){
        if (enemy.health <= 0) {
            return process.exit(console.log(`\n ${enemy.name} is dead`));
        } else {
        enemy.take_damage(this.name, this.power);
        }
    }
    alive(){
        return this.health >0;

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

const hero = new Character ('ahmer', 10, 5);
const goblin = new Character ('gobbles', 10,2);
const zombie = new Character ('eric-zombie', 15, 3);
const ultraZombie = new Character('aspen-zombie', 9001, 9001);

function check_alive (prompt) {
    if (hero.alive()) {
        game();
    } else {
        prompt.done();
    }
}

function game () {
    console.log("=====Welome to Hero RPG 2=====");
    console.log("Hero's health: "+hero.health);
    console.log("Goblin's health: "+goblin.health);
    console.log("Zombie's health: "+zombie.health);
    console.log("Ultra Zombie's health: ?? ");
    console.log("===========================================");

    prompt('What do you want to do?\n 1. Fight Goblin\n 2. Fight Zombie\n 3. Fight Ultra Zombie\n 4. Do nothing\n 5. Flee')
        .then(function (ans) {
            if (ans == '1') {
                hero.attack(goblin);
                goblin.attack(hero);
                check_alive(prompt);
            }
            else if (ans == '2'){
                hero.attack(zombie);
                zombie.attack(hero);
                check_alive(prompt);
            }
            else if (ans == '3'){
                hero.attack(ultraZombie);
                ultraZombie.attack(hero);
                check_alive(prompt);
            }
            else if (ans == '4'){
                zombie.attack(hero);
                check_alive(prompt);
            }
            else if (ans == '5'){
                console.log('You fled. Never stood a chance anyways.')
                prompt.done();
            }
            else{
                console.log('Invalid input, try again.');
                game();
            }
        })
        .catch(function rejected(err) {
            console.log('error:', err.stack);
            prompt.finish();
        });
}

game();
