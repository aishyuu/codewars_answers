// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]

// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

function arrayDiff(a, b) {
    if(b == []) {
      return a
    } else if(a == []) {
      return b
    }
    
    let result = [];
    let map = {};
    
    for(let i = 0; i < b.length; i++) {
      if(map[b[i]] == undefined) {
        map[b[i]] = 1
      }
    }
    
    for(let i = 0; i < a.length; i++) {
      if(map[a[i]] == undefined) {
        result.push(a[i]);
      }
    }
    
    return result;
  }