const Cat = require("./quiz");

describe('Cat Tests', () => {
  let kitty;

  beforeEach(() => {
    kitty = new Cat('Kitty');
  });

  // test('is cat', () => {});

  // test('name', () => {
  //   expect(kitty.name).toBe('Kitty');
  // });

  // test('miaow', () => {
  //   expect(/ is miaowing\./).toMatch(kitty.miaow());
  // });

  test('raises error', () => {
    expect(() => new Cat()).toBe(Error);
  });
});