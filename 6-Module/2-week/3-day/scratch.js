// const js_decorator = (func_being_decorated) => {
//     return (another_arg) => {
//         another_arg += 'something happened';
//         return func_being_decorated(another_arg);
//     };
// };

// let my_func = (arg) => {
//     // Pretend this function does something
//     return arg;
// };

// const newFunction = js_decorator(my_func);

// console.log(newFunction('Pretend '));

/* 
newFunction is the return of the js_decorator being invoked line 13
   - takes in my_func as an argument
        - my_func reeturns the argument passed to it

then we invoke newFunction passing in 'Pretend '
    concat Pretend with something happened
    return my_func passing in 'pretend something happened'

*/

// simple js class
class Dog {
    constructor() {
        this.sound = 'woof';
    }
}

const myDog = new Dog();
console.log(myDog);