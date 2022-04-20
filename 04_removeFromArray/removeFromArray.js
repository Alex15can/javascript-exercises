const removeFromArray = function(userArray, ...itemsToRemove) {
    const newArray = [];
    userArray.forEach((item) => {
        if (!itemsToRemove.includes(item)) {
            newArray.push(item);
        }
    });
    return newArray
};

// Do not edit below this line
module.exports = removeFromArray;
