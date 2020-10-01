module.exports = function toReadable(num) {
  let current = num.toString();
  let digits = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
  };
  let tens = {
    10: "ten",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety",
  };
  let secondTen = {
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
  };
  if (digits[num] || tens[num] || secondTen[num]) {
    return digits[num] || tens[num] || secondTen[num];
  }
  if (current.length == 2) {
    return `${tens[current[0] + 0]} ${digits[current[1]]}`;
  }
  if (current.length == 3 && !current.includes("0")) {
    return `${digits[current[0]] + " " + "hundred"} ${toReadable(
      current.slice(1)
    )}`;
  } else if (current[1] == "0" && current[2] == "0") {
    return `${digits[current[0]] + " " + "hundred"}`;
  } else {
    return current[1] == "0"
      ? `${digits[current[0]] + " " + "hundred"} ${toReadable(current[2])}`
      : `${digits[current[0]] + " " + "hundred"} ${toReadable(
          current.slice(1)
        )}`;
  }
};
