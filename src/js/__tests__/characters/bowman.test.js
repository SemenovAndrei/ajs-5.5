import Bowman from '../../characters/bowman';

test.each([
  [1],
  [true],
  [null],
  [undefined],
  [[]],
  [{}],
  ['a'],
  ['a '],
  [' a  a'],
  ['aaaa '],
  ['aaaaaaaaaaa'],
])('%p', (name) => {
  expect(() => {
    // eslint-disable-next-line no-new
    new Bowman(name);
  }).toThrow();
});

test.each([
  ['Alex', {
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
    name: 'Alex',
    type: 'bowman',
  }],
  ['Semen', {
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
    name: 'Semen',
    type: 'bowman',
  }],
])('%p', (name, expected) => {
  const result = new Bowman(name);
  expect(result).toEqual(expected);
});
