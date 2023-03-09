// Code for test from bootcamp class repository
const Intern = require(`../lib/Intern`);

test(`The fourth constructor argument will set the \"school\" property`, () => {
    const control = `UofM`;
    const e = new Intern(`Mavis`, 1, `test@email.com`, control);
    expect(e.school).toBe(control);
});

test(`getRole() returns an \"Intern\" string`, () => {
    const control = `Intern`;
    const e = new Intern(`Mavis`, 1, `test@email.com`, `UofM`);
    expect(e.getRole()).toBe(control);
});

test(`getSchool() returns a \"school\" string`, () => {
    const control = `UofM`;
    const e = new Intern(`Mavis`, 1, `test@email.com`, control);
    expect(e.getSchool()).toBe(control);
});