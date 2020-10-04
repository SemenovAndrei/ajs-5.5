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
  ['Alex', -40],
  ['Alex', '40'],
  ['Alex', NaN],
  ['Alex', true],
  ['Alex', null],
  ['Alex', undefined],
])('%p %p', (name, points) => {
  const result = new Character(name);
  expect(() => {
    result.damage(points);
  }).toThrow();
});

test.each([
  ['Alex', 0, {
    attack: 0,
    defence: 0,
    health: 100,
    level: 1,
    name: 'Alex',
  }],
  ['Semen', 50, {
    attack: 0,
    defence: 0,
    health: 50,
    level: 1,
    name: 'Semen',
  }],
  ['noob', 500, {
    attack: 0,
    defence: 0,
    health: -400,
    level: 1,
    name: 'noob',
  }],
])('%p %p', (name, points, expected) => {
  const result = new Character(name);
  result.damage(points);
  expect(result).toEqual(expected);
});

test('урон по персонажу с отрицательным количеством здоровья', () => {
  const result = new Character('Alex');
  result.damage(500);
  result.damage(500);
  expect(result.health).toBe(-400);
});
