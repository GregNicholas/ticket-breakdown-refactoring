const { deterministicPartitionKey } = require("./dpk");

const MAX_PARTITION_KEY_LENGTH = 256

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns correct value when given input 42", () => {
    const trivialKey = deterministicPartitionKey(42);
    expect(trivialKey).toBe("4e94ccd8d7dc0381681ba14408f5a4f7a9834d0101b1e21db1396f9bf431c852a5a3eabd3aeb6195ff3d490625a6ea75d0a7fc3761b20e1fdbc57bd0758286dc");
  });

  it("returns partitionKey when there is a partitionKey in the event, and it will return as a string", () => {
    const trivialKey = deterministicPartitionKey({partitionKey: 42, a: 232, b: "value"});
    expect(trivialKey).toBe("42");
  });

  it("returns correct value, NOT partition key when partitionKey exists but is empty", () => {
    const trivialKey = deterministicPartitionKey({partitionKey: "", a: 232, b: "value"});
    expect(trivialKey).toBe("c0e057e8f19cf025b80b58e643177be91e58ee46b10f370c6db5b648472645030dce3b744392cb8c06759788eb300dca9f4382da35d25799b8c18e88f50c12ce");
  });

  it("Returns correct value, but not the partitionKey that is in a nested object", () => {
    const trivialKey = deterministicPartitionKey({a: 232, b: {partitionKey: "dsafklj243r"}});
    expect(trivialKey).toBe("2029459c8f583ee77dc8f13c36bab9d9325da796ccf891c565e623969d63b593c98dfddd8bfc6af851e73d0405da476bdd5c5882616388e232c11b901fb9cb0c");
  });

  it("Returned candidate length is a max of MAX_PARTITION_KEY_LENGTH", () => {
    const trivialKey = deterministicPartitionKey({partitionKey: "92643d8fbfeb80b5c852e72f5b26f005ffd40fb274c32a20f46ccda38a36de0dd78c7d6b68f14a7b2a90f3c01c999aa82ac69ece5c2ca2b3a295a11da36d949392643d8fbfeb80b5c852e72f5b26f005ffd40fb274c32a20f46ccda38a36de0dd78c7d6b68f14a7b2a90f3c01c999aa82ac69ece5c2ca2b3a295a11da36d949392643d8fbfeb80b5c852e72f5b26f005ffd40fb274c32a20f46ccda38a36de0dd78c7d6b68f14a7b2a90f3c01c999aa82ac69ece5c2ca2b3a295a11da36d9493"});
    expect(trivialKey.length).toBeLessThanOrEqual(MAX_PARTITION_KEY_LENGTH);
  });
});
