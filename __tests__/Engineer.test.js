const Engineer = require("../lib/Engineer");

test("Can set github by constructor", () => {
  const testGithub = "JoshGithubUser";
  const newEng = new Engineer("Foo", 1, "noemail@noemail.com", testGithub);
  expect(newEng.github).toBe(testGithub);
});

test("can get github username by getGithub() function", () => {
  const testGithub = "JoshGithubUser";
  const newEng = new Engineer("Foo", 1, "noemail@noemail.com", testGithub);
  expect(newEng.getGithub()).toBe(testGithub);
});

test("getRole() defaults to Engineer", () => {
  const testRole = "Engineer";
  const newEng = new Engineer(
    "Foo",
    1,
    "noemail@noemail.com",
    "JoshGithubUser"
  );
  expect(newEng.getRole()).toBe(testRole);
});
