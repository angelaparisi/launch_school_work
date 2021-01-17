class Luhn {
  constructor(stringNum) {
    this.luhnNum = this.removeSpaces(stringNum);
  }
  valid() {
    if (!this.hasValidChars(this.luhnNum) || this.luhnNum.length <= 1) {
      return false;
    }

    let reversedLuhn = this.luhnNum.split('').reverse().join('');

    let luhnTest = [];

    for (let index = 0; index < reversedLuhn.length; index++) {
      let currentNum = Number(reversedLuhn[index]);
      if (index % 2 !== 0) {
        let doubledNum = currentNum * 2;
        if (doubledNum > 9) {
          doubledNum -= 9;
        }
        luhnTest.push(String(doubledNum));
      } else {
        luhnTest.push(String(currentNum));
      }
    }

    let sum = luhnTest.reduce((accum, element) => accum + Number(element), 0);
    return sum % 10 === 0;
  }
  removeSpaces(string) {
    return string.match(/[^ ]/g).join('');
  }
  hasValidChars(string) {
    let onlyNumbers = string.match(/[0-9]/g);
    return onlyNumbers.length === string.length;
  }
}

module.exports = Luhn;