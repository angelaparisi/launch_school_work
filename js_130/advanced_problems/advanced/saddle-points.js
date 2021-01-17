class Matrix {
  constructor(matrix) {
    this.matrix = matrix;
    this.rows = this.getRows();
    this.columns = this.getColumns();
    this.saddlePoints = this.getSaddlePoints();
  }
  getRows() {
    return this.matrix.split('\n').map(row => row.trim().split(' ')).map(row => {
      return row.map(stringNum => Number(stringNum));
    })
  }
  getColumns() {
    let columnsArray = [];
    this.rows.forEach(row => {
      row.forEach((number, index) => {
        if (columnsArray[index]) {
          columnsArray[index].push(number);
        } else {
          columnsArray[index] = [number];
        }
      })
    })
    return columnsArray;
  }
  getSaddlePoints() {
    let saddlePoints = [];
    this.rows.forEach((row, rowIndex) => {
      row.forEach((number, numberIndex) => {
        if (this.largestNumberInRow(number, row)) {
          if (this.smallestNumberInColumn(number, this.columns[numberIndex])) {
            saddlePoints.push([rowIndex, numberIndex]);
          }
        }
      })
    })
    return saddlePoints;
  }
  largestNumberInRow(rowElement, row) {
    return rowElement === Math.max(...row);
  }
  smallestNumberInColumn(columnElement, column) {
    return columnElement === Math.min(...column);
  }
}


module.exports = Matrix;