const Bicycle = require("./bicycle")
const ElectricBicycle = require("./electric-bicycle")
const Review = require("./review")

class Tester{
    constructor(name){
        this.name = name
        this.reviews = []
    }

    submitReview(vehicle, starRating, txt){
        if(vehicle.validate()){
            let review = new Review(vehicle, this, starRating, txt)
            review.addReview()
            this.setAttribute(vehicle)
            return review
        } else{
            throw new Error("Cannot submit review for invalid vehicle.")
        }
    }

    setAttribute(vehicle){
        if(vehicle instanceof Bicycle){
            this.bikeTester = true
        }
        if(vehicle instanceof ElectricBicycle){
            this.eBikeTester = true
        }
    }
}

module.exports = Tester