const rollD20 = () => {
    return 20;
}

class EverCraftCharacter {
    constructor(name, alignment) {
        this.name = name
        this.alignment = alignment
        this.armorClass = 10
        this.hitPoints = 5

    }

    attack = (dieRoll) => {
        if (dieRoll > 10) {
            this.dealDamage()
            return "Hit!"
        } else {
            return "Miss!"
        }
    }

    dealDamage = (dieRoll) => {
        if (dieRoll == 20) {
            return "Deal critical damage"
        } else {
            return "Deal 1 damage"
        }
    }

    takeDamage = (damage) => {
        this.hitPoints - damage

    }


}