const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class");

describe("Word", function () {
  describe("Word constructor function", function () {
    const newWord = new Word("banana");
    it('should have a "word" property', function () {
      expect(newWord).to.have.property("word");
    });

    it('should set the "word" property when a new word is created', function () {
      expect(newWord.word).to.equal("banana");
    });
  });

  describe("removeVowels function", function () {
    it("should return a the word with all vowels removed", function () {
      const newWord = new Word("banana");
      expect(newWord.removeVowels()).to.equal("bnn");
    });
  });

  describe("removeConsonants function", function () {
    it("should return the word with the consonants removed", function () {
      const newWord = new Word("banana");
      expect(newWord.removeConsonants()).to.equal("aaa");
    });
  });

  describe("pigLatin function", function () {
    it("should return the word converted to pig latin with the first letter being a vowel ", function () {
      const word1 = new Word("apple");
      expect(word1.pigLatin()).to.equal("appleyay");
    });

    it("should return the word converted to pig latin with the first letter being a consonant ", function () {
      const word2 = new Word("banana");
      expect(word2.pigLatin()).to.equal("ananabay");
    });
  });
});
