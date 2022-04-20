const reverseString = function(stringToReverse) {
    newString = ""
    for (let i = 0; i < stringToReverse.length; i++) {
        if (i == 0) {
            newString = newString + stringToReverse.slice(-1)
            //Needed this to use splice at length -1 not sure if best solution
        } else if (i > 0) {
            newString = newString + stringToReverse.slice(-1-i,-i)
            //Covers all but last/first element for building new string for return
        }
    }
    return newString
};

// Do not edit below this line
module.exports = reverseString;
