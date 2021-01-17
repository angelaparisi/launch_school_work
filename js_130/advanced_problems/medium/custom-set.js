class CustomSet {
  constructor(set = []) {
    this.set = set;
    return this;
  }
  empty() {
    return this.set.length === 0;
  }
  contains(element) {
    return this.set.includes(element);
  }
  subset(newSet) {
    return this.set.every(element => newSet.contains(element));
  }
  disjoint(newSet) {
    return this.set.every(element => !newSet.contains(element));
  }
  eql(newSet) {
    if (this.set.length !== newSet.set.length) return false;
    return this.subset(newSet);
  }
  add(element) {
    if (!this.contains(element)) {
      this.set.push(element);
      this.set.sort((a, b) => a - b);
    }
    return this;
  }
  intersection(newSet) {
    let sharedElements = this.set.filter(element => newSet.contains(element));
    sharedElements.sort((a, b) => a - b);
    return new CustomSet(sharedElements);
  }
  difference(newSet) {
    let diffElements = this.set.filter(element => !newSet.contains(element));
    diffElements.sort((a, b) => a - b);
    return new CustomSet(diffElements);
  }
  union(newSet) {
    let unionSet = new CustomSet(this.set);
    newSet.set.forEach(element => unionSet.add(element));
    return unionSet;
  }
}

module.exports = CustomSet;