
class CircularBuffer {
  constructor(size) {
    this.elements = [];
    
    for (let i = 0; i < size; i++) {
      this.elements.push([]);
    }
    
    this.size = this.elements.length;
  }
  write(value) {
    if (value !== null & value !== undefined) {
      let firstEmptySlot = this.elements.filter(slot => slot.length === 0)[0];
      if (!firstEmptySlot) {
        throw new Error("Buffer is full")
      } 
      firstEmptySlot.push(value);
    }
  }
  read() {
    let firstValue = this.elements.filter(slot => slot.length === 1)[0];
    if (!firstValue) {
      throw new Error('Buffer is empty');
    } else {
      let poppedValue = firstValue.pop();
      this.elements.shift();
      this.elements.push([]);
      return poppedValue;
    }
  }
  clear() {
    this.elements.forEach(slot => slot.pop());
  }
  forceWrite(value) {
    let slotsWithValues = this.elements.map((slot, index) => [slot[0], index]).filter(slot => slot[0]);
    if (slotsWithValues.length !== this.size) {
      this.write(value);
    } else {
      let indexOfOldestSlot = slotsWithValues[0][1];
      this.read();
      this.write(value);
    }
  }
}

module.exports = CircularBuffer;