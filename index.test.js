const { generateText } = require("./");

test("should output name and age", () => {
  const text = generateText("John", 30);
  expect(text).toBe("John has 30 years old");
});
