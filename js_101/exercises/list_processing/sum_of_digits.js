function sum(integer) {
  return String(integer).split('').reduce((accumulator, digit) => accumulator + Number(digit), 0);
}


console.log(sum(23));           // 5
sum(496);          // 19
sum(123456789);    // 45