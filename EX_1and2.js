export class Employee{

    #name
    #age
    #salary
    #position
    /**
     * @constructor
     * @param {String} name
     * @param {Number} age
     * @param {Number} salary Зарплата
     * @param {String} position Посада
     */
    constructor(name, age, salary, position){
        this.#name = name || "Default name"
        this.#age = age || 0
        this.#salary = salary || 0
        this.#position = position || "Default name"
    }
    /**
     * гетери властивостей
     * @readonly
     */
    get name() { return this.#name }
    get age() { return this.#age }
    get salary() { return this.#salary }
    get position() { return this.#position }
}

/**
 * Список працівників з кодом таблиці
 * @class EmpTable
 */
export class EmpTable{

    #employees = []
    /**
     * @constructor
     * @param {Employee} employees 
     */
    constructor(employees){
        this.#employees = employees || []
    }
    /**
     * @returns {String} output Код таблиці працівників
     */
    getHtml(){
        let output = `
    <table>
        <thead>
            <tr>
                <td>№</td>
                <td>Name</td>
                <td>Age</td>
                <td>Position</td>
                <td>Salary</td>
            </tr>
        </thead>
        <tbody>
        `
        for (let i = 0; i < this.#employees.length; i++){
            output += `
            <tr>
                <td>${i + 1}</td>
                <td>${this.#employees[i].name}</td>
                <td>${this.#employees[i].age}</td>
                <td>${this.#employees[i].position}</td>
                <td>${this.#employees[i].salary}</td>
            </tr>
            `
        }
        output += `
        </tbody>
    </table>
        `
        return output
    }
}

export class StyledEmpTable extends EmpTable{
    
    #styles
    /**
     * @constructor
     * @param {Employee} employees 
     * @param {Object} styles Об'єкт стилів, де ключ - назва тегу до якого буде доданий стиль, а 
     * значення - об'єкт стилів. Приклад "table": {"border-collapse": "collapse", "width": "50%", "margin-top": "20px"}
     */
    constructor(employees, styles){
        super(employees)
        this.#styles = styles || {
            "table": {"border-collapse": "collapse", "width": "50%", "margin-top": "20px"},
            "th, td": {"border": "1px solid #333", "padding": "8px 12px", "text-align": "left"},
            "thead": {"background-color": "#f2f2f2", "font-weight": "bold"},
            "tbody tr:nth-child(even)": {"background-color": "#fafafa"}
        }
    }
    /**
     * @returns {String} output Код стилів таблиці працівників
     */
    getStyles(){
        let output = `    <style>`
        for (const element of Object.keys(this.#styles)){
            output += `\n${element} {`
            for (const [style, value] of Object.entries(this.#styles[element]))
                output += `\n    ${style}: ${value};`
            output += `\n}`
        }
        output += `    </style>`
        return output
    }
    /**
     * @returns {String} output Код таблиці працівників
     */
    getHtml(){
        document.head.innerHTML += this.getStyles()
        return super.getHtml()
    }
}