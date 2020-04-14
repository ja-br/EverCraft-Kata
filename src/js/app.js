const rollD20 = () => {
    return 20;
}

class EverCraftCharacter {


    constructor(name, alignment) {
        let strScore = 10
        let dexScore = 10
        let conScore = 10
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
            case 10:
                return 0
                break
        }

    }




}