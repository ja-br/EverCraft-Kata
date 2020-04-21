const rollD20 = () => {
  return 20;
}

class PlayerCharacter {


  constructor(name, alignment) {

    this.name = name
    this.alignment = alignment
    this.armorClass = 10
    this.hitPoints = 5
    this.abilityScores = {
      str: {
        score: 10,
        mod: 0
      },
      dex: {
        score: 10,
        mod: 0
      },
      con: {
        score: 10,
        mod: 0
      },
      wis: {
        score: 10,
        mod: 0
      },
      int: {
        score: 10,
        mod: 0
      },
      cha: {
        score: 10,
        mod: 0
      },
    }

  }


  attack = (dieRoll) => {
    if (dieRoll + this.abilityScores.str.mod > 10) {
      this.dealDamage()
      return "Hit!"
    } else {
      return "Miss!"
    }
  }

  dealDamage = (dieRoll) => {
    if (dieRoll == 20) {
      return `Deal ${(this.abilityScores.str.mod + 1) * 2} damage`
    } else {
      return `Deal ${this.abilityScores.str.mod + 1} damage`
    }
  }

  takeDamage = (damage) => {
    this.hitPoints -= damage

  }

  getArmorClass = () => {
    return this.armorClass + this.getAbilityMod("dex")
  }

  getHitPoints = () => {
    return this.hitPoints + this.getAbilityMod("con")
  }

  setAbilityMod = (ability) => {

    switch (this.abilityScores[ability].score) {
      case 1:
        this.abilityScores[ability].mod = -5
        break
      case 2:
      case 3:
        this.abilityScores[ability].mod = -4
        break
      case 4:
      case 5:
        this.abilityScores[ability].mod = -3
        break
      case 6:
      case 7:
        this.abilityScores[ability].mod = -2
        break
      case 8:
      case 9:
        this.abilityScores[ability].mod = -1
        break
      case 10:
      case 11:
        this.abilityScores[ability].mod = 0
        break
      case 12:
      case 13:
        this.abilityScores[ability].mod = 1
        break
      case 14:
      case 15:
        this.abilityScores[ability].mod = 2
        break
      case 16:
      case 17:
        this.abilityScores[ability].mod = 3
        break
      case 18:
      case 19:
        this.abilityScores[ability].mod = 4
        break
      case 20:
      case 21:
        this.abilityScores[ability].mod = 5
        break
      case 22:
      case 23:
        this.abilityScores[ability].mod = 6
        break
    }

  }

  getAbilityMod = (ability) => {
    return this.abilityScores[ability].mod
  }

  getAbilityScore = (ability) => {
    return this.abilityScores[ability].score
  }

  increaseAbilityScore = (ability, amount) => {
    this.abilityScores[ability].score += amount
    this.setAbilityMod(ability)
  }

  decreaseAbilityScore = (ability, amount) => {
    this.abilityScores[ability].score -= amount
    this.setAbilityMod(ability)

  }


}