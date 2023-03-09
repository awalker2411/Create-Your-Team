// Code for test from bootcamp class repository
const Engineer = require(`../lib/Engineer`);

test(`The fourth constructor argument will set the \"github\" property`, () => {
    const control = `awalker2411`;
    const e = new Engineer(`Mavis`, 1, `test@email.com`, control);
    expect(e.gitHub).toBe(control);
});

test(`getRole() returns an \"Engineer\" string`, () => {
    const control = `Engineer`;
    const e = new Engineer(`Mavis`, 1, `test@email.com`, `awalker2411`);
    expect(e.getRole()).toBe(control);
});

test(`getGithub() returns a \"github\" string`, () => {
    const control = `awalker2411`;
    const e = new Engineer(`Mavis`, 1, `test@email.com`, control);
    expect(e.getGitHub()).toBe(control);
});