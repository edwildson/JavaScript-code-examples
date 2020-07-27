const minMax = (...nums) => [
  nums.reduce((min, num) => (num < min ? num : min)),
  nums.reduce((max, num) => (num > max ? num : max)),
];

let min, max;

[min, max] = minMax(24, 5, 34, 10);

console.log(min, max);

[min, max] = minMax(18, 23, 103, 70, 80, 25);

console.log(min, max);
