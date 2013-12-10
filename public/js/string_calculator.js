var StringCalculator = (function (window, undefined) {
  var api = {
    add: function ( input ) {
      var numbers,
        sum;

      if (typeof input === undefined || input.length <= 0) {
        return 0;
      }

      numbers = input;

      if (~numbers.indexOf(',')) {
        numbers = numbers.split(',');
        sum = Math.floor(numbers[0]) + Math.floor(numbers[1]);
      } else {
        sum = Math.floor(numbers);
      }

      return sum;
    }
  };

  return api;
})(window, undefined);
