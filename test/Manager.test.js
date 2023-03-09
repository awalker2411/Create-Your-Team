// Code for test from bootcamp class repository
const Manager = require(`../lib/manager`)

test(`The fourth constructor argument will set the \"officeNumber\" property`, () => {
    const control = 56
    const e = new Manager(`Mavis`, 1, `test@email.com`, control)
    expect(e.officeNumber).toBe(control)
})

test(`getRole() return a \"Manager\" string`, () => {
    const control = `Manager`
    const e = new Manager(`Mavis`, 1, `test@email.com`, 56)
    expect(e.getRole()).toBe(control)
})

test(`getOfficeNumber() returns an \"officeNumber\" string`, () => {
    const control = 56
    const e = new Manager(`Mavis`, 1, `test@email.com`, control)
    expect(e.getOfficeNumber()).toBe(control)
})