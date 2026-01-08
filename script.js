// import { HtmlElement, CssElement, HtmlBlock } from "./elements.js";

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

// document.body.innerHTML = `<button id=""></button>`

// let win = window.open("", "_blank", "width=500,height=500")
// win.open()


const form = document.getElementById('myForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');

form.addEventListener('submit', function(event) {
  event.preventDefault(); 

  const name = nameInput.value; // .value для текстовых полей
  const email = emailInput.value;
  // const isChecked = document.getElementById('myCheckbox').checked; // .checked для чекбоксов

  console.log({ name, email }); // Выводим в виде объекта
});
