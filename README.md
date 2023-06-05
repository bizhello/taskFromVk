## Description

Решение задачи: 

Нужно написать функцию для разбивки текста на фрагменты.
1. Функция принимает на вход текст, написанный латиницей, где все слова разделены только 1 пробелом. Текст содержит в себе только латинские буквы и пробелы (без знаков препинания).
2. Задача функции разбить текст на СМСки размером не больше 140 символов и вернуть в результате массив получившихся строк.
3. Так как СМСки платные важно разбить текст на минимальное количество фрагментов.
4. Слова нельзя разбивать посередине, то есть текст нужно разбить строго по пробелам.
5. Если весь текст не помещается в один фрагмент то каждый фрагмент должен заканчиваться суффиксом ' k/n', где k - порядковый номер фрагмента, n - количество фрагментов, на которые разбит текст. k <= n <= 9999.
6. Суффикс учитывается при подсчете длины СМСки, то есть длина фрагмента вместе с суффиксом должна быть меньше или равна 140 символам.
7. Задача решаема, то есть в тексте не может быть настолько длинных слов, чтобы одно слово с суффиксом не уместилось в одном СМС.

## Installation

```bash
$ npm install

```

## Running the app

```bash
# development
$ npm run build

```

## Test

```bash
# unit tests
$ npm run test

```