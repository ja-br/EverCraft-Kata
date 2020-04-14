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
            expect(testCharacter.attack(9)).toBe("Miss!")

        });
        it('should deal damage when it hits', () => {
            expect(testCharacter.dealDamage(10)).toBe("Deal 1 damage")
        });
        it('should deal critical damage if it rolls a 20', () => {
            expect(testCharacter.dealDamage(20)).toBe("Deal critical damage")
        });
        it('should have ability scores', () => {
            expect(testCharacter.str).toBe(10)
            expect(testCharacter.dex).toBe(10)
            expect(testCharacter.con).toBe(10)
            expect(testCharacter.int).toBe(10)
            expect(testCharacter.wis).toBe(10)
            expect(testCharacter.cha).toBe(10)

        });
    })
});