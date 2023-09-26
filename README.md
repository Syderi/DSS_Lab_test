# отклик на вакансию ООО DSS Lab (ДСС Лаб)

*Решение 1-ой задачи представлено в файле style.scss*

[деплой](https://syderi.github.io/DSS_Lab_test/)

*Решение 2-ой задачи представлено в файле decode.js*

```
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
```
