function getNumber(n) {
  const numbers = new Map([
    ["1", "one"],
    ["2", "two"],
    ["3", "three"],
    ["4", "four"],
    ["5", "five"],
    ["6", "six"],
    ["7", "seven"],
    ["8", "eight"],
    ["9", "nine"],
    ["10", "ten"],
    ["11", "eleven"],
    ["12", "twelve"],
    ["13", "thirteen"],
    ["14", "fourteen"],
    ["15", "fifteen"],
    ["16", "sixteen"],
    ["17", "seventeen"],
    ["18", "eighteen"],
    ["19", "nineteen"],
    ["20", "twenty"],
    ["30", "thirty"],
    ["40", "fourty"],
    ["50", "fifty"],
  ]);

  let numberToReturn = null;
  if (n <= 20 || n === 30 || n === 40 || n === 50) {
    return numbers.get(`${n}`);
  } else if (n <= 29) {
    return `twenty ${numbers.get(`${n.toString().slice(1)}`)}`;
  } else if (n <= 39) {
    return `thirty ${numbers.get(`${n.toString().slice(1)}`)}`;
  } else if (n <= 49) {
    return `fourty ${numbers.get(`${n.toString().slice(1)}`)}`;
  } else if (n <= 59) {
    return `fifty ${numbers.get(`${n.toString().slice(1)}`)}`;
  }
}

function timeInWords(h, m) {
  // Write your code here
  const hour = parseInt(h);
  const minutes = parseInt(m);

  if (minutes === 0) {
    return `${getNumber(hour)} o' clock`;
  } else if (minutes < 15) {
    return `${
      minutes === 1 ? "one minute" : `${getNumber(minutes)} minutes`
    } past ${getNumber(hour)}`;
  } else if (minutes === 15) {
    return `quarter past ${getNumber(hour)}`;
  } else if (minutes < 30) {
    return `${getNumber(minutes)} minutes past ${getNumber(hour)}`;
  } else if (minutes === 30) {
    return `half past ${getNumber(hour)}`;
  } else if (minutes === 45) {
    return `quarter to ${getNumber(hour + 1)}`;
  } else if (minutes <= 59) {
    const diff = 60 - minutes;
    return `${
      diff === 1 ? "one minute" : `${getNumber(diff)} minutes`
    } to ${getNumber(hour + 1)}`;
  }
}

console.log(timeInWords(7, 29));
