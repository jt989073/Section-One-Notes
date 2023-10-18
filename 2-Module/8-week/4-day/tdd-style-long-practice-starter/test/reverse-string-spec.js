// Your code here
const chai = require('chai')
const expect = chai.expect

const reverseString = require('../problems/reverse-string')

describe('reverseString()', () => {
    it('should reverse a string', () =>{
        const returnVal = 'nuf'
        const reversed = reverseString('fun')
        expect(reversed).to.equal(returnVal)
    })

    it('if argument is not a string.', () => {
        expect(() => reverseString(1)).to.throw(TypeError)
    })
})