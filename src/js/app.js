const rollD20 = () => {
    return 20;
}

class EverCraftCharacter {


    constructor(name, alignment) {
        this.name = name
        this.alignment = alignment
        this.armorClass = 10
        this.hitPoints = 5
        this.str = 10
        this.dex = 10
        this.con = 10
        this.wis = 10
        this.int = 10
        this.cha = 10
        this.strMod = getStrMod
        this.dexMod = getDexMod
        this.conMod = getConMod


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