import Magician from '../../characters/magician';

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
    new Magician(name);
  }).toThrow();
});

test.each([
  ['Alex', {
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
    name: 'Alex',
    type: 'magician',
  }],
  ['Semen', {
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
    name: 'Semen',
    type: 'magician',
  }],
])('%p', (name, expected) => {
  const result = new Magician(name);
  expect(result).toEqual(expected);
});
