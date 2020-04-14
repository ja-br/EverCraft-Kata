const rollD20 = () => {
    return 20;
}

class EverCraftCharacter {


    constructor(name, alignment) {
        let strScore = 10
        let dexScore = 1
        let conScore = 17
        let wisScore = 10
        let intScore = 10
        let chaScore = 10
        this.name = name
        this.alignment = alignment
        this.armorClass = 10
        this.hitPoints = 5
        this.abilityScores = {
            str: {
                score: strScore,
                mod: this.getAbilityModifier(strScore)
            },
            dex: {
                score: dexScore,
                mod: this.getAbilityModifier(dexScore)
            },
            con: {
                score: strScore,
                mod: this.getAbilityModifier(conScore)
            },
            wis: {
                score: strScore,
                mod: this.getAbilityModifier(wisScore)
            },
            int: {
                score: strScore,
                mod: this.getAbilityModifier(intScore)
            },
            cha: {
                score: strScore,
                mod: this.getAbilityModifier(chaScore)
            },
        }

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

    getAbilityModifier = (score) => {
        switch (score) {
            case 1:
                return -5
                break
            case 2:
            case 3:
                return -4
                break
            case 4:
            case 5:
                return -3
                break
            case 6:
            case 7:
                return -2
                break
            case 8:
            case 9:
                return -1
                break
            case 10:
            case 11:
                return 0
                break
            case 12:
            case 13:
                return 1
                break
            case 14:
            case 15:
                return 2
                break
            case 16:
            case 17:
                return 3
                break
            case 18:
            case 19:
                return 4
                break
            case 20:
            case 21:
                return 5
                break
            case 22:
            case 23:
                return 6
                break
        }

    }




}