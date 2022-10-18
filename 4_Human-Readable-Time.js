// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

//     HH = hours, padded to 2 digits, range: 00 - 99
//     MM = minutes, padded to 2 digits, range: 00 - 59
//     SS = seconds, padded to 2 digits, range: 00 - 59

// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

function humanReadable (seconds) {
    if(seconds > 369999 || seconds < 0) {
      return "Invalid Time";
    }
    let HH = (Math.floor(seconds/3600)).toLocaleString('en-US',{minimumIntegerDigits: 2, useGrouping:false});
    seconds %= 3600;
    let MM = (Math.floor(seconds/60)).toLocaleString('en-US',{minimumIntegerDigits: 2, useGrouping: false});
    let SS = (Math.floor(seconds%60)).toLocaleString('en-US',{minimumIntegerDigits: 2, useGrouping: false});
    
    return `${HH}:${MM}:${SS}`
}