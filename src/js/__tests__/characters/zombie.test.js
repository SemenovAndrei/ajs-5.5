import Zombie from '../../characters/zombie';

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
    new Zombie(name);
  }).toThrow();
});

test.each([
  ['Alex', {
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
    name: 'Alex',
    type: 'zombie',
  }],
  ['Semen', {
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
    name: 'Semen',
    type: 'zombie',
  }],
])('%p', (name, expected) => {
  const result = new Zombie(name);
  expect(result).toEqual(expected);
});
