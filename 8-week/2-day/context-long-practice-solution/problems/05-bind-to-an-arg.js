const bindToAnArg = (func, arg) => {
  return func.bind('anything can go here', arg)
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = bindToAnArg;