const repeatString = function(word, times) {
    if (times < 0) {
        return "ERROR"
    }
    answer = ''
    for (let i = 0; i< times; i++) {
        answer = answer + word;
    }
    return answer
};

// Do not edit below this line
module.exports = repeatString;
