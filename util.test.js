const puppeteer = require("puppeteer");
const { generateText, checkAndGenerate } = require("./util");

test("should output name and age", () => {
  const text = generateText("John", 30);
  expect(text).toBe("John has 30 years old");
});

test("should generate a valid text output", () => {
  const text = checkAndGenerate("John", 30);
  expect(text).toBe("John has 30 years old");
});

test("should create element with correct class", async () => {
  const browser = await puppeteer.launch({
    headless: true,
    // slowMo: 80,
    // args: ["--window-size=1920,1080"],
  });
  const page = await browser.newPage();
  await page.goto("http://localhost:5500");
  await page.click("input#name");
  await page.type("input#name", "John");
  await page.click("input#age");
  await page.type("input#age", "30");
  await page.click("#btnAddUser");
  const finalText = await page.$eval(".user-item", (el) => el.textContent);
  expect(finalText).toBe("John has 30 years old");
}, 3000);
