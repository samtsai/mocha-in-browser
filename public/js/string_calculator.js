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

        sum = numbers.reduce(function(a, b) {
          return Math.floor(a) + Math.floor(b);
        });
      } else {
        sum = Math.floor(numbers);
      }

      return sum;
    }
  };

  return api;
})(window, undefined);
