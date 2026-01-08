import { HtmlElement, CssElement, HtmlBlock } from "./elements.js";


// let root = new HtmlElement("html", false, "", [    
//     new HtmlElement("head", false, "", [
//         new HtmlElement("meta", true).addAttribute("charset", "UTF-8"),
//         new HtmlElement("meta", true).addAttribute("name", "viewport").addAttribute("content", "width=device-width, initial-scale=1.0"),
//         new HtmlElement("link", false).addAttribute("rel", "stylesheet").addAttribute("href", "style.css"),
//         new HtmlElement("title", false, "Test page")
//     ]),
//     new HtmlElement("body", false, "", [
//         new HtmlElement("h1", false, "Close the window"),
//         new HtmlElement("button", false, "close").addAttribute("id", "btn")
//     ])
// ]).addAttribute("lang", "en")

// let block = new HtmlBlock(root, [
//     new CssElement("h1", {"color": "red", "font-size": "20px"})
// ])
// console.log(block.getCode())




const root =
new HtmlElement("div", false, "", [
    new HtmlElement("div", false, "", [
        new HtmlElement("div", false, "", [
            new HtmlElement("div", false, "", [
                new HtmlElement("p", false, "Реєстрація")
                    .addAttribute("class", "title"),

                new HtmlElement("div", false, "", [
                    new HtmlElement("form", false, "", [

                        new HtmlElement("div", false, "", [
                            new HtmlElement("label", false, "Імя користувача")
                                .addAttribute("for", "username"),
                            new HtmlElement("input", true)
                                .addAttribute("type", "text")
                                .addAttribute("id", "username")
                                .addAttribute("placeholder", "Введіть імя користувача")
                                .addAttribute("required", "")
                        ]).addAttribute("class", "form-block"),

                        new HtmlElement("div", false, "", [
                            new HtmlElement("label", false, "Email")
                                .addAttribute("for", "email"),
                            new HtmlElement("input", true)
                                .addAttribute("type", "email")
                                .addAttribute("id", "email")
                                .addAttribute("placeholder", "Введіть ваш email")
                                .addAttribute("required", "")
                        ]).addAttribute("class", "form-block"),

                        new HtmlElement("div", false, "", [
                            new HtmlElement("label", false, "Пароль")
                                .addAttribute("for", "password"),
                            new HtmlElement("input", true)
                                .addAttribute("type", "password")
                                .addAttribute("id", "password")
                                .addAttribute("placeholder", "Введіть пароль")
                                .addAttribute("required", "")
                        ]).addAttribute("class", "form-block"),

                        new HtmlElement("div", false, "", [
                            new HtmlElement("label", false, "Підтвердження пароля")
                                .addAttribute("for", "confirmPassword"),
                            new HtmlElement("input", true)
                                .addAttribute("type", "password")
                                .addAttribute("id", "confirmPassword")
                                .addAttribute("placeholder", "Підтвердіть пароль")
                                .addAttribute("required", "")
                        ]).addAttribute("class", "form-block"),

                        new HtmlElement("div", false, "", [
                            new HtmlElement("input", true)
                                .addAttribute("type", "checkbox")
                                .addAttribute("id", "terms")
                                .addAttribute("required", ""),
                            new HtmlElement("label", false, "Я погоджуюся з умовами користування")
                                .addAttribute("for", "terms")
                        ]).addAttribute("class", "checkbox-block"),

                        new HtmlElement("button", false, "Зарeєструватися")
                            .addAttribute("type", "submit")
                            .addAttribute("class", "btn")

                    ])
                ]).addAttribute("class", "modal-body")

            ]).addAttribute("class", "modal-content")
        ]).addAttribute("class", "block")
    ]).addAttribute("class", "log-block")
]).addAttribute("class", "log-page")

const styles = [
    new CssElement("body, html, *", {
        margin: "0",
        padding: "0"
    }),
    new CssElement(".log-page", {
        display: "flex",
        "justify-content": "center",
        "align-items": "center",
        width: "100vw",
        height: "100vh",
        background: "radial-gradient(at bottom left, #676c3a 25%, #f4f4f4 80%, #65819a)"
    }),
    new CssElement(".log-block", {
        display: "flex",
        "justify-content": "center",
        "align-items": "center",
        width: "65%",
        height: "50%",
        "min-height": "600px",
        "background-color": "rgba(0,0,0,0.4)",
        "border-radius": "40px",
        "box-shadow": "0 2px 10px rgba(0,0,0,0.5)"
    }),
    new CssElement(".block", {
        width: "70%",
        height: "90%"
    }),
    new CssElement(".modal-content", {
        padding: "25px",
        height: "85%"
    }),
    new CssElement(".modal-body", {
        display: "flex",
        "flex-direction": "column",
        "justify-content": "space-around",
        "align-items": "center",
        height: "100%"
    }),
    new CssElement(".modal-body form", {
        display: "flex",
        "flex-direction": "column",
        "align-items": "center",
        "justify-content": "space-around",
        width: "100%",
        height: "100%"
    }),
    new CssElement(".form-block", {
        display: "flex",
        "flex-direction": "column",
        "align-items": "center",
        width: "100%"
    }),
    new CssElement(".title", {
        "font-family": "Arial",
        "font-size": "30px",
        "text-align": "center",
        "padding-bottom": "20px",
        color: "rgb(53,53,53)"
    }),
    new CssElement("label", {
        "font-family": "Arial",
        "font-size": "20px",
        color: "rgb(53,53,53)"
    }),
    new CssElement(".form-block input", {
        width: "95%",
        padding: "10px 12px",
        "font-size": "14px",
        border: "1px solid #ccc",
        "border-radius": "4px",
        "margin-top": "10px"
    }),
    new CssElement(".checkbox-block", {
        display: "flex",
        gap: "8px",
        "margin-top": "20px"
    }),
    new CssElement(".btn", {
        width: "100%",
        padding: "12px",
        background: "#26853c",
        border: "none",
        color: "white",
        "font-size": "16px",
        "border-radius": "4px",
        cursor: "pointer"
    }),
    new CssElement(".btn:hover", {
        background: "#218838"
    })
]


let registerBtn = new HtmlBlock(
	new HtmlElement("button", false, "Зарeєструватися")
		.addAttribute("id", "register-btn")
)
let page = new HtmlBlock(root, styles)
document.body.innerHTML += registerBtn.getCode()

let btn = document.getElementById("register-btn")
btn.addEventListener("click", () => {
	let win = window.open("", "_blank", "width=900,height=700")
	win.open()
	win.document.writeln(page.getCode())
})
