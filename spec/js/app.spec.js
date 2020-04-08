describe('EverCraft Character', () => {

    beforeEach(()=>{

        testCharacter = new EverCraftCharacter("Tom", "evil")
    })
    describe('Character Core', ()=>{
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
        it('should be able to attack', () => {
            expect(testCharacter.attack()).toBe("attack")
            
        });
    })
});