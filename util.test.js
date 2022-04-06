const { generateText, checkAndGenerate } = require("./util");

test("should output name and age", () => {
  const text = generateText("John", 30);
  expect(text).toBe("John has 30 years old");
});

test("should generate a valid text output", () => {
  const text = checkAndGenerate("John", 30);
  expect(text).toBe("John has 30 years old");
});
