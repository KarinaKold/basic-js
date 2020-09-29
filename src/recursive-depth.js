const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
      let count = 0;
      if (Array.isArray(arr)) {
          arr.forEach(element => count = Math.max(count, this.calculateDepth(element)));
              return ++count;
      } else {
          return 0;
      }
  }
};
