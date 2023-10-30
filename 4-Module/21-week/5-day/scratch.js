const puppies = await Puppy.findAll({
    where: {
        breed: "GSP"
    }
})

const skinnyPuppies = await Puppy.findAll({
    where: {
        weight: {[Op.lte]: 10}
    }
})