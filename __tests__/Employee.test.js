const Employee = require("../lib/Employee");

test("Starts employee", () => {
  const newEmp = new Employee();
  expect(typeof newEmp).toBe("object");
});

test("User can set name by constructor", () => {
  const testName = "Josh";
  const newEmp = new Employee(testName);
  expect(newEmp.name).toBe(testName);
});

test("user can input email by constructor", () => {
  const testEmail = "noemail@noemail.com";
  const newEmp = new Employee("Foo", 1, testEmail);
  expect(newEmp.email).toBe(testEmail);
});

test("user can set id by constructor", () => {
  const testId = 150;
  const newEmp = new Employee("Foo", testId);
  expect(newEmp.id).toBe(testId);
});

test("Can get name by getName() function", () => {
  const testName = "Josh";
  const newEmp = new Employee(testName);
  expect(newEmp.getName()).toBe(testName);
});

test("can get email by getEmail() function", () => {
  const testEmail = "noemail@noemail.com";
  const newEmp = new Employee("Foo", 1, testEmail);
  expect(newEmp.getEmail()).toBe(testEmail);
});

test("can get id by getId() function", () => {
  const testId = 150;
  const newEmp = new Employee("Foo", testId);
  expect(newEmp.getId()).toBe(testId);
});

test("getRole() should default to Employee", () => {
  const testRole = "Employee";
  const newEmp = new Employee("Josh", 1, "noemail@noemail.com");
  expect(newEmp.getRole()).toBe(testRole);
});
