const encode = (input) =>
  [...input]
    .map((x, i) => [x.charCodeAt(0), i])
    .sort()
    .flatMap((x) => x)
    .join('.')
    .match(/./g)
    .flatMap((x, i) => new Array(x == '.' ? 1 : 2 + x * 2).fill((1 + i) % 2))
    .join('')
    .replace(/(([01])\2*)/g, (x) => `${+x ? '.' : '-'}${x.length}`);


    // Решение
    
const decode = (input) =>
  input
    .split('.')
    .flatMap((x) =>
      x.length ? ['1'.repeat(x.split('-')[0]), '0'.repeat(x.split('-')[1])] : []
    )
    .map((el) => (el.length === 1 ? '.' : (el.length - 2) / 2))
    .join('')
    .split('.')
    .reduce(
      (acc, el, index, array) => (index % 2 ? acc : [...acc, [el, array[index + 1]]]),
      []
    )
    .sort((a, b) => a[1] - b[1])
    .map((el) => String.fromCharCode(el[0]))
    .join('');

const strStart = 'Hello12';
console.log("Start string ===" ,strStart)

const strCode = encode(strStart);
console.log("encode string ===", strCode);

const strDeCode = decode(strCode);
console.log("decode string ===",strDeCode);

console.log(strStart === strDeCode);
