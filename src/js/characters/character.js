/**
* @class
* Основной шаблон создания персонажа
*
* @param {string} name - имя персонажа,
* должно быть строкой с длиной 2-10 символов.
* В имени не должно быть пробелов.
*
* @throws {error} error - некорректно заданный параметр
*/
class Character {
  constructor(name) {
    if (typeof name !== 'string') {
      throw new Error('name должно быть строкой');
    }
    if (name.length < 2 || name.length > 10) {
      throw new Error('длина имени должна быть 2-10 символов');
    }
    if (/\s/.test(name)) {
      throw new Error('name не должно содержать пробелов');
    }

    this.name = name;
    this.level = 1;
    this.health = 100;
  }
}

export default Character;
