/* eslint-disable no-console */
// TODO: write your code here
import Bowman from './characters/bowman';

// eslint-disable-next-line no-console
console.log('worked');

const result = new Bowman('Alex');
result.damage(50);
result.levelUp();
console.log(result);
