const palindromes = function (text1) {
    let text2 = text1.toLowerCase();
    let text3 = text2.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\s]|_/g, "")
    console.log(text3, text3.split("").reverse().join(""));
    if (text3 == text3.split("").reverse().join("")) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
