import Undead from '../../characters/undead';

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
    new Undead(name);
  }).toThrow();
});

test.each([
  ['Alex', {
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
    name: 'Alex',
    type: 'undead',
  }],
  ['Semen', {
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
    name: 'Semen',
    type: 'undead',
  }],
])('%p', (name, expected) => {
  const result = new Undead(name);
  expect(result).toEqual(expected);
});
