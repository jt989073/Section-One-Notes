// Your code here
const chai = require('chai')
const expect = chai.expect

const {returnsThree, reciprocal} = require('../problems/number-fun')

describe('returnsThree()', () => {
    it('should return the number 3', () => {
        expect(returnsThree(3)).to.equal(3)
    })
})

describe('reciprocal()', () => {
    it('should return the number 3', () => {
        expect(reciprocal(2)).to.equal(.5)
    })

    it('should throw TypeError if number not between 1 and 1 million', () => {
        expect(() => reciprocal(-1)).to.throw(TypeError)
    })
})