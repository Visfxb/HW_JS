/**
 * Клас новина
 * @class News
 */
class News{
    #title
    #text
    #tags
    #date
    /**
     * @constructor
     * @param {number} title Заголовок
     * @param {number} text Текст новини
     * @param {number} tags Теги цієї новини
     * @param {Date} date  Дата виходу
     */
    constructor(title, text, tags, date){
        this.title = title || "Title"
        this.text = text || "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis vel quod tempora nostrum laudantium odio, perspiciatis id?"
        this.tags = tags || []
        this.date = date || new Date()
    }
    /**
     * Метод, що робить розмітку новини на сторінці
     * @returns {undefined}
     */
    print(){
        let div = document.createElement("div")
        div.style.width = "450px"
        div.innerHTML += `<h2>${this.title}</h2>`

        if ((new Date() - this.date) / (1000 * 3600) < 24)
            div.innerHTML += `<p>Today</p>`
        else if ((new Date() - this.date) / (1000 * 3600 * 24) < 7)
            div.innerHTML += `<p>${Math.floor((new Date() - this.date) / (1000 * 3600 * 24))} days ago</p>`
        else
            div.innerHTML += `<p>${String(this.date.getDate()).padStart(2, '0')}.${String(this.date.getMonth() + 1).padStart(2, '0')}.${this.date.getFullYear()}</p>`

        div.innerHTML += `<p>${this.text}</p>`
        div.innerHTML += `<p>${this.tags.join(" ")}</p>`

        document.body.appendChild(div)
    }
}

/**
 * Класс стрічка новин
 * @class NewsFeed
 */
class NewsFeed{
    #news
    /**
     * @constructor
     * @param {Array} news список новин 
     */
    constructor(news){
        this.news = news || []
    }
    /**
     * Геттер
     * @returns {number} length довжина стрічки
     */
    get getLength(){
        return this.news.length
    }
    /**
     * Метод виводу всіх новин на сторінку
     */
    printAll(){
        for (let element of this.news)
            element.print()
        document.body.innerHTML += `<hr>`
    }
    /**
     * Додає новину
     * @param {News} news 
     */
    add(news){
        this.news.push(news)
    }
    /**
     * Видаляє задану новину
     * @param {News} news 
     */
    delete(news){
        for (let i = 0 ; i < this.news.length; i++)
            if (JSON.stringify(this.news[i]) === JSON.stringify(news))
                this.news.splice(i, 1)
    }
    /**
     * Сортує новини за датою від новішої до старішої
     */
    sort(){
        for (let i = 0 ; i < this.news.length - 1; i++){
            for (let j = 0; j < this.news.length - i - 1; j++){
                if (this.news[j].date < this.news[j + 1].date){
                    [this.news[j], this.news[j + 1]] = [this.news[j + 1], this.news[j]]
                }
            }
        }
    }
    /**
     * Шукає новини за тегом
     * @param {String} tag шуканий тег
     * @returns {Array} output новини у якиъ э тег tag
     */
    findByTag(tag){
        let output = []
        for (let element of this.news)
            if (element.tags.includes(tag))
                output.push(element)
        return output
    }
}

let n1 = new News(
    "First news",
    "Some text here",
    ["#js", "#news"],
    new Date(2025, 11, 20)
)

let n2 = new News(
    "Second news",
    "Another text",
    ["#css", "#news"],
    new Date(2025, 11, 22)
)

let n3 = new News(
    "Third news",
    "More content",
    ["#js", "#frontend"],
    new Date(2025, 11, 21)
)

let feed = new NewsFeed([n1, n2])

document.body.innerHTML += `<p>Source array</p>`
feed.printAll()
console.log("Source array: " + feed.getLength)

document.body.innerHTML += `<p>Add 3</p>`
feed.add(n3)
feed.printAll()
console.log("Add 3: " + feed.getLength)

document.body.innerHTML += `<p>Delete 2</p>`
feed.delete(n2)
feed.printAll()
console.log("Delete 2: " + feed.getLength)

let jsNews = feed.findByTag("#js")
console.log("Find by #js: ", jsNews)

document.body.innerHTML += `<p>Sort by date</p>`
feed.sort()
feed.printAll()