const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
    if (!Array.isArray(matrix)) {
      return 0;
    }
    var sum = 0;
    matrix.forEach(arr=> {
      arr.forEach(mayBeCat => {
        if (mayBeCat == "^^") {
          sum ++;
        };  
      });
    });
    return sum;
};
