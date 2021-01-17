function Cat(name) {
  this.name = name;
}
Cat.prototype.miaow = function() {
  return `${this.name} is miaowing.`;
}

module.exports = Cat;
