const Potion = require('../lib/Potion');

const Character = require('./Character');

//player constructor- notice player Methods are outside of the constructor but still reference it. 
class Player extends Character {
    constructor(name = '') {
        
        //call parent constructor here:
        super(name);
        
        this.inventory = [new Potion('health'), new Potion()];
    }

    //method to get player stats
    getStats() {
        
        return {  
            potions: this.inventory.length,
            health: this.health,
            strength: this.strength,
            agility: this.agility
        };    

    }

    // method to get inventory
    getInventory() {
        if(this.inventory.length) {
            return this.inventory;
        }
        return false;    
    }   



    //method for adding potion to inventory
    addPotion(potion) {
        this.inventory.push(potion);
    }

    //method for using potion from inventory
    usePotion(index) {
        const potion = this.getInventory().splice(index, 1)[0];

        switch (potion.name) {
            case 'agility':
                this.agility += potion.value;
                break;
            case 'health':
                this.health += potion.value;
                break;
            case 'strength':
                this.strength += potion.value;
                break;
        }
    }
}



module.exports = Player;