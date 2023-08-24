// Implement the SocialNetwork class here
class SocialNetwork {
  constructor() {
    this.users = {};
    this.follows = {};
    this.currentID = 0;
  }

  addUser(name) {
    // Your code here
    this.currentID++;
    const nextId = this.currentID;
    this.users[nextId] = { id: nextId, name: name };
    this.follows[nextId] = new Set();
    return nextId;
  }

  getUser(userID) {
    // Your code here
    // if(!this.users[userID]) return null
    return this.users[userID] || null;
    // return this.users[userID] ? this.users[userID] : null
  }

  follow(userID1, userID2) {
    // Your code here
    if (!this.users[userID1] || !this.users[userID2]) {
      return false;
    }
    this.follows[userID1].add(userID2);
    return true;
  }

  getFollows(userID) {
    // Your code here
    return this.follows[userID]
  }

  getFollowers(userID) {
    // Your code here
    const followers = new Set()
    for(let id in this.follows){
      if(this.follows[id].has(userID)){
        followers.add(+id) // +strinng converts to a number === Number(id) === parseInt(id)
      }
    }
    return followers
  }

  getRecommendedFollows(userID, degrees) {
    // Your code here
    const queue = [[userID]]
    const visited = new Set([userID])
    const recommended = []

    while(queue.length ){
      const path = queue.shift()
      const id = path[path.length - 1]

      if(path.length > degrees + 2) break
      // console.log(path)
      if(path.length > 2) recommended.push(id)

      for(let follow of this.follows[id]){
        if(!visited.has(follow)){
          visited.add(follow)
          queue.push([...path, follow])
        }
      }
    }

    return recommended

  }
}

module.exports = SocialNetwork;
