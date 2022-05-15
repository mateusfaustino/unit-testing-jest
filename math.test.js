const {sum, subtraction, multiplication , division} = require("./math")

describe('Math functions', () => {
    it('one plus two is three', () => {
        expect(sum(1,2)).toBe(3)
    });

    it('five minus two is three',()=>{
        expect(subtraction(5,2)).toBe(3)
    })
    
    it('five times 2 is ten',()=>{
        expect(multiplication(5,2)).toBe(10)
    })

    it('ten divided by 2 is five',()=>{
        expect(division(10,2)).toBe(5)
    })
    
});
