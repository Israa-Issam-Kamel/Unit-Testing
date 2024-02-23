// Import the functions
const {
  capitalizeTextFirstChar,
  createArray,
  random,
  removePropertyFromObject,
} = require("../lab1");

// Hooks to run before any tests in this suite
// beforeAll(() => {
//   // This runs once before any tests in this suite
//   console.log("Before all tests...");
// });

// Hooks to run before each test in this suite
// beforeEach(() => {
//   // This runs before each test in this suite
//   console.log("Before each test...");
// });

// Describe the function to test
describe("capitalizeTextFirstChar function", () => {
  // Test case 1
  it("should return a string", () => {
    const result = capitalizeTextFirstChar("i'm ahmed ali");
    expect(typeof result).toBe("string");
  });

  // Test case 2
  it("should return the string after capitalizing every word's first character", () => {
    const result = capitalizeTextFirstChar("i'm israa issam");
    expect(result).toEqual("I'm Israa Issam");
  });
});

// Describe the function to test
describe("createArray function", () => {
  // Test case 1
  it("should return an array", () => {
    const result = createArray(3);
    expect(Array.isArray(result)).toBe(true);
  });

  // Test case 2
  it("should return an array of length 2 and include 1 when passed 2", () => {
    const result = createArray(2);
    expect(result.length).toBe(2);
    expect(result.includes(1)).toBe(true);
  });

  // Test case 3
  it("should return an array of length 3 and not include 3 when passed 3", () => {
    const result = createArray(3);
    expect(result.length).toBe(3);
    expect(result.includes(3)).toBe(false);
  });
});

// Describe the function to test
describe("random function", () => {
  // Test case 1
  it("should return a number", () => {
    const result = random(5, 7);
    expect(typeof result).toBe("number");
  });

  // Test case 2
  it("should return a number >= 5 and <= 7 when passed 5 and 7", () => {
    const result = random(5, 7);
    expect(result).toBeGreaterThanOrEqual(5);
    expect(result).toBeLessThanOrEqual(7);
  });

  // Test case 3
  it("should return NaN when passed 3", () => {
    const result = random(3);
    expect(isNaN(result)).toBe(true);
  });
});

// Describe the function to test
describe("removePropertyFromObject function", () => {
  // Test case 1
  it("should take property/key and check that's defined in that object or throwing an error", () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(() => removePropertyFromObject(obj, "d")).toThrow(
      new Error("Property not found in object")
    );
  });

  // Test case 2
  it("should return type of object", () => {
    const obj = { a: 1, b: 2, c: 3 };
    const result = removePropertyFromObject(obj, "b");
    expect(typeof result).toBe("object");
  });

  // Test case 3
  it("should return the object without the property/key passed as parameter", () => {
    const obj = { a: 1, b: 2, c: 3 };
    const result = removePropertyFromObject(obj, "b");
    expect(result).toEqual({ a: 1, c: 3 });
  });
});

// Hooks to run after each test in this suite
// afterEach(() => {
//   // This runs after each test in this suite
//   console.log("After each test...");
// });

// Hooks to run after all tests in this suite
// afterAll(() => {
//   // This runs once after all tests in this suite
//   console.log("After all tests...");
// });
