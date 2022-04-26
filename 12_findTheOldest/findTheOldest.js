const findTheOldest = function(arrayObj) {
    let resultAge = arrayObj.map(a => getAge(a.yearOfBirth,a.yearOfDeath));
    let maxAge = Math.max(...resultAge);
    let oldestIndex = resultAge.indexOf(maxAge);
    return arrayObj[oldestIndex]
};
const getAge = function(birth, death) {
    if (!death) {
        death = new Date().getFullYear();
      }
    return death - birth;
  };


// Do not edit below this line
module.exports = findTheOldest;
