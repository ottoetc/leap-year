//if it's not divisible by 4, 100, 400
describe('leapYear', function() {
  it("is false for a year that is not divisible by 4, 100, or 400", function(){
    expect(leapYear(1993)).to.equal(false);
  });

  it("is true for years divisible by 4", function() {
    expect(leapYear(2004)).to.equal(true);
  });

  it("is false for years divisible by 100", function() {
    expect(leapYear(1900)).to.equal(false);
  });

  it("is true for years divisible by 400", function() {
    expect(leapYear(2000)).to.equal(true);
  });
//if it's zero or negative, alert "needs user to enter a positive integer for the year"
  it("needs user to enter a positive integer for the year", function () {
    expect(leapYear(-2000)).to.equal(false);
  });
//if it's a string, alert "is false for strings"
  it("is false for strings", function() {
    expect(leapYear("")).to.equal(false);
  });
});
