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

console.log(Humanoid);
console.log(greet());