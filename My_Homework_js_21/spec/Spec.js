var pow = require('../js/testHome1Jasmine.js');

describe("pow", function() {
  it("pow.sayPow(x, y)", function() {
  	//prepare
  	var result;
  	//act
	result = pow.sayPow(2, 3);
  	//assert

    // expect(result).toBe(8); строгое сравнение
    expect(result).toEqual(8);
  });
});