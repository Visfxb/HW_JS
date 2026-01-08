export class HtmlElement{
    #tagName
    #isSelfClosing
    #text
    #attributes = {}
    #styles = {}
    #children = []
    constructor(tagName, isSelfClosing, text, children = []){
        this.#tagName = tagName
        this.#isSelfClosing = isSelfClosing
        this.#text = this.#isSelfClosing ? "" : text
        this.#children = this.#isSelfClosing ? [] : children
    }
    addAttribute(atributeName, value){
        this.#attributes[atributeName] = value
        return this
    }
    addStyle(styleName, value){
        this.#styles[styleName] = value
        return this
    }
    addFirstChild(tag){
        this.#children.unshift(tag)
        return this
    }
    addLastChild(tag){
        this.#children.push(tag)
        return this
    }
    getHtml(tabs = 0) {
        const tabStr = "\t".repeat(tabs)

        let attributeStr = ""
        for (const [k, v] of Object.entries(this.#attributes))
            attributeStr += ` ${k}="${v}"`

        let styleStr = ""
        if (Object.keys(this.#styles).length) {
            styleStr = ` style="`
            for (const [k, v] of Object.entries(this.#styles))
                styleStr += `${k}: ${v}; `
            styleStr += `"`
        }

        let result = `${tabStr}<${this.#tagName}${attributeStr}${styleStr}>`

        if (this.#isSelfClosing)
            return result

        if (this.#text)
            result += `${this.#text}`

        for (const child of this.#children)
            result += `\n${child.getHtml(tabs + 1)}`

        result += this.#text ? `</${this.#tagName}>` : `\n${tabStr}</${this.#tagName}>`

        return result
    }
}

export class CssElement{
    #name
    #styles = {}
    constructor(name, styles){
        this.#name = name
        this.#styles = styles || {}
    }
    addStyle(name, value){
        this.#styles[name] = value
    }
    deleteStyle(name){
        delete this.#styles[name]
    }
    getCss(){
        let output = `${this.#name} {`
        for (const [key, value] of Object.entries(this.#styles))
            output += `\n\t${key}: ${value};`
        output += `\n}`
        return output
    }
}

export class HtmlBlock{
    #root
    #styles = []
    constructor(root, styles = []){
        this.#root = root
        this.#styles = styles
    }
    setRoot(root){
        this.#root = root
    }
    addStyle(style){
        this.#styles.push(style)
    }
    getCode(){
        let outputCss = `<style>\n`
        for (const element of this.#styles)
            outputCss += `${element.getCss()}`
        outputCss += `\n</style>`

        let outputHtml = `<!DOCTYPE html>\n`
        outputHtml += this.#root.getHtml()
        return outputCss + `\n\n` + outputHtml
    }
}
