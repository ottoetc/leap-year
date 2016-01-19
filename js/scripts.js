var leapYear = function(year) {
  if (year >= 0){
    return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
  } else {
    return false;
  }
};
