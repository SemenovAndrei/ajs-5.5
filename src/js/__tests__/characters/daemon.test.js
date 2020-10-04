import Daemon from '../../characters/daemon';

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
    new Daemon(name);
  }).toThrow();
});

test.each([
  ['Alex', {
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
    name: 'Alex',
    type: 'daemon',
  }],
  ['Semen', {
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
    name: 'Semen',
    type: 'daemon',
  }],
])('%p', (name, expected) => {
  const result = new Daemon(name);
  expect(result).toEqual(expected);
});
