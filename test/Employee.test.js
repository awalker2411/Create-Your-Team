// Code for test from bootcamp class repository
const Employee = require(`../lib/Employee`);

test(`When used with the \"new\" keyword, instantiates an Employee object`, () => {
    const e = new Employee();
    expect(typeof(e)).toBe(`object`);
});

test(`The first constructor argument will set the \"name\" property`, () => {
    const name = `Mavis`;
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

test(`The second constructor argument will set the \"id\" property`, () => {
    const control = 1;
    const e = new Employee(`Mavis`, control);
    expect(e.id).toBe(control);
});

test(`The third constructor argument will set the \"email\" property`, () => {
    const control = `test@email.com`;
    const e = new Employee(`Mavis`, 1, control);
    expect(e.email).toBe(control);
});

test(`getName() returns a \"name\" string`, () => {
    const control = `Mavis`;
    const e = new Employee(control);
    expect(e.getName()).toBe(control);
});

test(`getId() returns an \"id\" integer`, () => {
    const control = 1;
    const e = new Employee(`Mavis`, control);
    expect(e.getID()).toBe(control);
});

test(`getEmail() returns an \"email\" string`, () => {
    const control = `test@email.com`;
    const e = new Employee("Mavis", 1, control);
    expect(e.getEmail()).toBe(control);
});

test(`getRole() returns an \"Employee\" string`, () => {
    const control = `Employee`;
    const e = new Employee(`Mavis`, 1, `test@email.com`);
    expect(e.getRole()).toBe(control);
});