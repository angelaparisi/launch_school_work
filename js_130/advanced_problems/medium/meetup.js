const DAYS = {
  'Sunday': 0,
  'Monday': 1,
  'Tuesday': 2, 
  'Wednesday': 3, 
  'Thursday': 4, 
  'Friday': 5,
  'Saturday': 6,
};

const TEENTHS = [13, 14, 15, 16, 17, 18, 19];

function meetupDay(year, month, day, descriptor) {
  let daysInMonth = getDatesInMonth(year, month, day);

  switch(descriptor) {
    case 'teenth':
      let teenDate;
      daysInMonth.forEach(date => {
        if (TEENTHS.includes(date.getDate())) {
          teenDate = date;
        }
      });
      return teenDate;
    case 'last':
      return daysInMonth[daysInMonth.length - 1];
    default:
      let num = descriptor[0];
      if (daysInMonth.length < num) {
        throw new Error();
      } else {
        let index = num - 1;
        return daysInMonth[index];
      }
  }
}

function getDatesInMonth(year, month, day) {
  let daysInMonth = [];
  let dayNum = DAYS[day];

  for (let date = 1; date <= 31; date++) {
    let currentDay = new Date(year, month, date);
    if (currentDay.getDay() === dayNum && currentDay.getMonth() === month) {
      daysInMonth.push(currentDay);
    }
  }
  return daysInMonth;
}

module.exports = meetupDay;