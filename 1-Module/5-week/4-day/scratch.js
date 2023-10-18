const replaceKeysInObj = function(obj, oldKey, newKey) {
    // Base case: if the input is not an object, return the input
    if (typeof obj !== 'object') {
      return obj;
    }
  
    // Check if the current object has the oldKey
    if (oldKey in obj) {
      // Rename the key to newKey while preserving the value
      obj[newKey] = obj[oldKey];
      delete obj[oldKey];
    }
  
    // Recursively process each property of the object
    for (let key in obj) {
      obj[key] = replaceKeysInObj(obj[key], oldKey, newKey);
    }
  
    return obj;
  };

  const obj = {
    key1: 'value1',
    key2: {
      key3: 'value2',
      key4: {
        key1: 'value3'
      }
    },
    key5: 'value4'
  };
  
const result = replaceKeysInObj(obj, 'key1', 'newKey');
  
console.log(result);