describe('EverCraft Character', () => {

    beforeEach(() => {

        testCharacter = new EverCraftCharacter("Tom", "evil")
    })
    describe('Character Core', () => {
        it('should have a name', () => {
            expect(testCharacter.name).toBe("Tom")
        });
        it('should have an alignment', () => {
            expect(testCharacter.alignment).toBe("evil")
        });
        it('should have an armor class of 10', () => {
            expect(testCharacter.armorClass).toBe(10)
        });
        it('should have 5 hit points', () => {
            expect(testCharacter.hitPoints).toBe(5)
        });
        it('should hit if it rolls higher than 10', () => {
            expect(testCharacter.attack(11)).toBe("Hit!")
        });
        it('should miss if it rolls 10 or lower', () => {
            expect(testCharacter.attack(3)).toBe("Miss!")

        });
        it('should deal damage when it hits', () => {
            expect(testCharacter.dealDamage(10)).toBe("Deal 1 damage")
        });
        it('should deal critical damage if it rolls a 20', () => {
            expect(testCharacter.dealDamage(20)).toBe("Deal critical damage")
        });
        it('should have ability scores', () => {
            expect(testCharacter.abilityScores.str.score).toBe(14)


        });
        it('should have a score modifier of 0 if the ability score is 10', () => {
            expect(testCharacter.abilityScores.str.mod).toBe(2)
        });
        it('should have a modifier of -5 if the score is 1', () => {
            expect(testCharacter.abilityScores.dex.mod).toBe(-5)
        });
        it('should have a modifier of 3 if the score is 17', () => {
            expect(testCharacter.abilityScores.con.mod).toBe(3)
        });
        it('should add strength modifier to attack roll', () => {
            expect(testCharacter.attack(9)).toBe("Hit!")
        });
    })
});