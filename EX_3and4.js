/**
 * Базовий клас
 * @class Machine
 */
export class Machine{
    #enabled = false
    enable(){ this.#enabled = true }
    disable(){ this.#enabled = false }
    get enabled() { return this.#enabled }
}

export class CoffeeMachine extends Machine{
    #waterAmount
    #power
    #capacity
    #timeoutId
    /**
     * @constructor
     * @param {Number} waterAmount Об'єм залитії води
     * @param {Number} capacity Максимальний об'єм
     * @param {Number} power Потужність
     */
    constructor(waterAmount, capacity, power){
        super()
        this.#capacity = capacity || 0
        this.#power = power || 0
        if (waterAmount > capacity) this.#waterAmount = capacity
        else if (waterAmount < 0) this.#waterAmount = 0
        else this.#waterAmount = waterAmount
    }
    /**
     * @returns {Number} Кількість міллісекунд для кип'ятіння
     */
    getBoilTime(){
        return this.#waterAmount * 4200 * 80 / this.#power
    }
    /**
     * Метод готовності
     */
    onReady(){
        alert("Кава готова!")
    }
    /**
     * Початок приготування
     */
    run(){
        if (!this.enabled){
            alert("Помилка. Кавомашина вимкнена")
            return
        }
        if (this.#waterAmount === 0){
            alert("Помилка. Немає води")
            return
        }
        this.#timeoutId = setTimeout(() => this.onReady(), this.getBoilTime())
    }
    /**
     * передчасна зупинка
     */
    stop(){
        clearTimeout(this.#timeoutId)
    }
    /**
     * гетери і сетери властивостей
     */
    set waterAmount(waterAmount){
        if (waterAmount > this.#capacity) this.#waterAmount = this.#capacity
        else if (waterAmount < 0) this.#waterAmount = 0
        else this.#waterAmount = waterAmount
    }
    get waterAmount(){ return this.#waterAmount }
    get power(){ return this.#power }
}

/**
 * @class Fridge
 * @property {Array} food список їжі
 */
export class Fridge extends Machine{
    
    #power = 0
    #food = []
    /**
     * @constructor
     * @param {Number} power 
     */
    constructor(power){
        super()
        this.#power = power
    }
    /**
     * Додає їжу в список
     * @param {String} item 
     * @param  {...any} items
     */
    addFood(item, ...items){
        if (!this.enabled){
            alert("Помилка. Холодильний вимкнений")
            return
        }
        items.unshift(item)
        for (let i = 0; i < items.length; i++){
            if (this.#food.length + 1 > Math.floor(this.#power / 100)){
                alert("Помилка. Холодильний переповнений")
                return
            }
            this.#food.push(items[i])
        }
    }
    /**
     * Видаляє їжу за назвою зі списку
     * @param {String} item 
     */
    daleteFood(item){
        const index = this.#food.indexOf(item)
        if (index !== -1)
            this.#food.splice(index, 1)
    }
    /**
     * гетери властивостей
     */
    getFood(){
        return [...this.#food]
    }
    /**
     * Перевизначений метод увімкнення
     */
    disable(){
        if (this.#food.length !== 0){
            alert("Помилка. Не можна вимкнути холодильний, коли в ньому є їжа")
            return
        }
        super.disable()
    }
}