// CODE here for your Lambda Classes
class GameObj {
    constructor(attr) {
        this.createdAt = attr.creaetdAt;
        this.dimensions = attr.dimensions;
        this.name = attr.name;
    }

    destroy() {
        return `${this.name} wass removed from the game.`;
    }
}
console.log(GameObj);
console.log(destroy());

class CharacterStats extends GameObj {
    constructor(attr) {
        super(attr);
        this.healthpoints = attr.healthpoints;
    }
takeDamage() {
    return `${this.name} took damage.`;
    }
}

console.log(CharacterStats);
console.log(takeDamage());

class Humanoid extends GameObj {
    constructor(attr) {
    super(attr);
    this.team = attr.team;
    this.weapons = attr.weapons;
    this.language = attr.language;
    }

    greet() {
        return `${this.name} offers a greeting in ${this.language}.`;
    }
}

const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 2, 
        width: 1, 
        height: 1, 
        },
    healthPoints: 5, 
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: 'Staff of Shamalama',
    language: 'Common Tongue'
});

const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 2, 
        width: 2,
        height: 2, 
    },
    healthPoints: 15, 
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
        'Giant Sword',
        'Shield'
    ],
language: 'Common Tongue'
});

const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 1, 
        width: 2,
        height: 4, 
    },
    healthPoints: 10, 
    name: 'Lilith', 
    team: 'Forest Kingdom', 
    weapons: [
        'Bow',
        'Dagger',
    ],
    language: 'Elvish',
});

console.log(Humanoid);
console.log(greet());