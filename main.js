import { Employee, EmpTable, StyledEmpTable } from "./EX_1and2.js";
import { Machine, CoffeeMachine, Fridge } from "./EX_3and4.js";


const e1 = new Employee("Alice", 25, 1200, "Frontend Developer")
const e2 = new Employee("Bob", 30, 1800, "Backend Developer")
const e3 = new Employee("Charlie", 40, 2500, "Team Lead")
const e4 = new Employee("Diana", 22, 900, "Intern")

// // EX_1
// const table = new EmpTable([e1, e2, e3, e4])
// document.body.innerHTML += table.getHtml()


// // EX_2
// const styledTable = new StyledEmpTable([e1, e2, e3, e4])
// document.body.innerHTML += styledTable.getHtml()


// // EX_3
// const coffee = new CoffeeMachine(200, 300, 1000)

// console.log(coffee.waterAmount)
// console.log(coffee.power)

// coffee.run()

// coffee.enable()
// coffee.run()

// coffee.waterAmount = 500
// console.log(coffee.waterAmount)


// // EX_4
// const fridge = new Fridge(400)
// fridge.addFood("Apple")

// fridge.enable()
// fridge.addFood("Apple")
// fridge.addFood("Milk", "Cheese")

// fridge.addFood("Meat", "Fish")
// console.log(fridge.getFood())

// fridge.disable()
