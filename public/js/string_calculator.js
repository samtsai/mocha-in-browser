var StringCalculator = (function (window, undefined) {
  var api = {
    add: function ( input ) {
      var numbers,
        sum;

      if (typeof input === undefined || input.length <= 0) {
        return 0;
      }

      if (~input.indexOf(',')) {
        numbers = input.split(',');
        sum = numbers[0] + numbers[1];
      } else {
        sum = numbers;
      }

      return Number(sum);
    }
  };

  return api;
})(window, undefined);
