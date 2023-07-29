class Vehicle {
  constructor(modelName, year, price) {
    this.modelName = modelName;
    this.year = year;
    this.price = price;
    this.reviews = [];
  }

  validate() {
    if (
      this.year <= 1950 ||
      this.year >= 2100 ||
      !this.modelName ||
      !this.price
    ) {
      return false;
    }
    return true;
    // return(typeof this.modelName === 'string') && this.year >= 1950 && this.year <= 2100 && this.price > 0
  }

  update(newName, newYear, newPrice) {
    if (newYear <= 1950 || newYear >= 2100) {
      throw new Error("Year must be between 1950 and 2100");
    }
    if (newPrice <= 0) {
      throw new Error("Price must be greater than 0");
    }
    this.modelName = newName;
    this.price = newPrice;
    this.year = newYear;
  }

  getDetails(){
    return `The ${this.year} ${this.modelName} costs $${this.price} and has ${this.reviews.length} reviews.`
  }

  findReviewByTester(testerName){
    return this.reviews.find(review => review.tester.name === testerName)
    
  }
}

module.exports = Vehicle;
