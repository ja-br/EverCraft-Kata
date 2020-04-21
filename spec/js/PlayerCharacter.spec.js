describe('EverCraft Character', () => {

    beforeEach(() => {

        testCharacter = new PlayerCharacter("Tom", "evil")
        testCharacter.increaseAbilityScore("str", 4)
        testCharacter.increaseAbilityScore("con", 7)
        testCharacter.increaseAbilityScore("dex", 7)
        testCharacter.increaseAbilityScore("wis", 7)
        testCharacter.increaseAbilityScore("int", 7)
        testCharacter.increaseAbilityScore("cha", 7)

    })
    describe('Character Core', () => {


        it('should have an alignment', () => {
            expect(testCharacter.alignment).toBe("evil")
        });

        it('should have an armor class of 10 + dex mod', () => {
            expect(testCharacter.getArmorClass()).toBe(13)
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

        it('should deal 1 plus strength mod damage when it hits', () => {
            expect(testCharacter.dealDamage(10)).toBe("Deal 3 damage")
        });

        it('should deal double damage if it rolls a 20', () => {
            expect(testCharacter.dealDamage(20)).toBe("Deal 6 damage")
        });

        it('should have ability scores', () => {
            expect(testCharacter.getAbilityScore("str")).toBe(14)
        });

        it('should have a score modifier of 0 if the ability score is 10', () => {
            expect(testCharacter.getAbilityMod("str")).toBe(2)
        });
        it('should have a modifier of -5 if the score is 1', () => {
            testCharacter.decreaseAbilityScore("dex", 16)
            expect(testCharacter.getAbilityMod("dex")).toBe(-5)
        });

        it('should have a con modifier of 3 if the score is 17', () => {
            expect(testCharacter.getAbilityMod("con")).toBe(3)
        });

        it('should add strength modifier to attack roll', () => {
            expect(testCharacter.attack(9)).toBe("Hit!")
        });
        it("should add con mod to hitpoints", () => {
            expect(testCharacter.getHitPoints()).toBe(8)
        })
    })
});