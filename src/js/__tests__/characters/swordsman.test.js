import Swordsman from '../../characters/swordsman';

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
    new Swordsman(name);
  }).toThrow();
});

test.each([
  ['Alex', {
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
    name: 'Alex',
    type: 'swordsman',
  }],
  ['Semen', {
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
    name: 'Semen',
    type: 'swordsman',
  }],
])('%p', (name, expected) => {
  const result = new Swordsman(name);
  expect(result).toEqual(expected);
});
