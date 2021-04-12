const Intern = require("../lib/Intern");

test("can set school by constructor", () => {
  const testSchool = "University of Arizona";
  const newIntern = new Intern("Foo", 1, "noemail@noemail.com", testSchool);
  expect(newIntern.school).toBe(testSchool);
});

test("getRole defaults to Intern", () => {
  const testRole = "Intern";
  const newIntern = new Intern(
    "Foo",
    1,
    "noemail@noemail.com",
    "University of Arizona"
  );
  expect(newIntern.getRole()).toBe(testRole);
});

test("can get school from getSchool() function", () => {
  const testSchool = "University of Arizona";
  const newIntern = new Intern("Foo", 1, "noemail@noemail.com", testSchool);
  expect(newIntern.getSchool()).toBe(testSchool);
});
