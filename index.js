const {deterministicPartitionKey} = require("./dpk");

console.log(deterministicPartitionKey({partitionKey: "", a:232, b: "value"}));

// console.log(deterministicPartitionKey({partitionKey: 42, a: 232, b: {z:2334, c: ['fsd', 'cand4', 5, {a: 434, b: 42}]}}));

// console.log(deterministicPartitionKey({partitionKey: ""}));
// console.log(deterministicPartitionKey());