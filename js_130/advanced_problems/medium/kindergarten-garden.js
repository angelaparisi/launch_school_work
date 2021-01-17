const PLANTS = {
  V: 'violets',
  R: 'radishes',
  C: 'clover',
  G: 'grass'
};
const STUDENTS = ['alice', 'bob', 'charlie', 'david', 'eve', 'fred',
  'ginny', 'harriet', 'ileana', 'joseph', 'kincaid', 'larry'];

class Garden {
  constructor(garden, students = STUDENTS) {
    this.students = students.sort();
    this.setStudentNames();
    this.garden = garden.split('\n');

    this.students.forEach(student => {
      this[student] = [];
    });

    this.setPlantsToStudents();
  }
  setStudentNames() {
    this.students = this.students.map(name => {
      return name[0].toLowerCase() + name.slice(1);
    });
  }
  setPlantsToStudents() {
    this.garden.forEach(row => {
      let studentIndex = 0;
      for (let i = 0; i < row.length; i += 2) {
        let currentStudent = this.students[studentIndex];
        this[currentStudent].push(PLANTS[row[i]], PLANTS[row[i + 1]]);
        studentIndex++;
      }
    });
  }
}

module.exports = Garden;