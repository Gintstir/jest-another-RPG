const Potion = require('../lib/Potion');

//player constructor- notice player Methods are outside of the constructor but still reference it. 
function Player(name= '') {
    this.name = name;

    this.health = Math.floor(Math.random() * 10 + 95);
    this.strength = Math.floor(Math.random() * 5 + 7);
    this.agility = Math.floor(Math.random() * 5 + 7);

    this.inventory = [new Potion('health'), new Potion()];    
    }

//method to get player stats
Player.prototype.getStats = function() {
    return{  
        potions: this.inventory.length,
        health: this.health,
        strength: this.strength,
        agility: this.agility
    };    
};

// method to get inventory
Player.prototype.getInventory = function() {
    if(this.inventory.length) {
        return this.inventory;
    }
    return false;    
};   

//method to get player health
Player.prototype.getHealth = function() {
    return `${this.name}'s health is now ${this.health}!`;
};

//method to check if player is Alive or not
Player.prototype.isAlive = function() {
    if (this.health === 0) {
        return false;
    }
    return true;
};

//method to reduce a Player's health
Player.prototype.reduceHealth = function(health) {
    this.health -= health;

    if(this.health < 0) {
        this.health = 0;
    }
};

module.exports = Player;