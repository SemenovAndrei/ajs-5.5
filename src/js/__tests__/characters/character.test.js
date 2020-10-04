import Character from '../../characters/character';

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
    new Character(name);
  }).toThrow();
});

test.each([
  ['Alex', {
    health: 100,
    level: 1,
    name: 'Alex',
  }],
  ['Semen', {
    health: 100,
    level: 1,
    name: 'Semen',
  }],
])('%p', (name, expected) => {
  const result = new Character(name);
  expect(result).toEqual(expected);
});
