## Destructuring Discussion

- Destructuring is just matching a pattern.

### Object Destructuring

  ```js
    // let obj = { person: "Caleb", animal: "elephant" };
    // let person = obj.person
    // let animal= obj.animal
    
    let { person, animal } = { person: "Caleb", animal: "elephant" };
    console.log(person, animal);

    // What if I wanted a different variable name? - Aliasing!
    let { person: name, animal: species } = { person: "Caleb", animal: "elephant" };
    console.log(name, species)
  ```

### Array Destructuring

  ```js
    // let arr = ["Rocket League", "James",];
    // let game = arr[0]
    // let player = arr[1]

    let [game, player] = ['Rocket League', 'James'];
    console.log('game:', game);
    console.log('player:', player);

    // Swapping
    [player, game] = [game, player];
    console.log('game:', game);
    console.log('player:', player);
  ```

## Rest and Spread

- Rest takes the `rest` of the arguments and puts them into an array and single parameter

  ```js
  let yellEverything = function (...strings) {
      //console.log(Array.isArray(strings));
      for (let i = 0; i < strings.length; i++) {
        strings[i] = strings[i].toUpperCase();
      }
      return result.join(' ');
  };

  console.log(yellEverything('hello', 'world'));
  console.log(yellEverything('hello'));
  console.log(yellEverything('Quiet', 'this,', "is", 'a', 'library'));
  ```

- Spread takes some data and 'spreads' it out of it's containing brackets.

  ```js
  let arr1 = [1, 2, 3];
  let arr2 = [4, 5, 6];
  let arr3 = [0, arr1, arr2];
  let arr4 = [0, ...arr1, ...arr2];
  console.log(arr3);
  console.log(arr4);
  
  let obj1 = { name: 'James' };
  let obj2 = { platform: 'PC', game: 'Rocket League' };
  let obj3 = { obj1, obj2, music: 'Lofi' };
  let obj4 = { ...obj1, ...obj2, music: 'Lofi' };
  console.log(obj3);
  console.log(obj4);
  
  obj1.name = 'Gabe';
  
  console.log(obj3);
  console.log(obj4);