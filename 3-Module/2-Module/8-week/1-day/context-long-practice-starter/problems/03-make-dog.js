// Your code here
class Dog{
	constructor(name){
		this.name = name
	}

	static makeJet(){
		return new this('Jet')
	}

	speak(){
		return `${this.name} says hi`
	}

	changeName(newName){
		this.name = newName
		return newName
	}
}


/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = Dog;
} catch {
	module.exports = null;
}