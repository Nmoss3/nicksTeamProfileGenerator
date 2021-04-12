const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");

test("can get office number by constructor", () => {
  const testNumber = 555 - 555 - 5555;
  const newManager = new Manager("Foo", 1, "noemail@noemail.com", testNumber);
  expect(newManager.officeNumber).toBe(testNumber);
});

test("getRole() defaults to Manager", () => {
  const testRole = "Manager";
  const newManager = new Manager(
    "Foo",
    1,
    "noemail@noemail.com",
    "555-555-5555"
  );
  expect(newManager.getRole()).toBe(testRole);
});

test("can get office number by getOfficeNumber() function", () => {
  const testNumber = 555 - 555 - 5555;
  const newManager = new Manager("Foo", 1, "noemail@noemail.com", testNumber);
  expect(newManager.getOfficeNumber()).toBe(testNumber);
});
