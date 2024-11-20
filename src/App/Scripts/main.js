const shell = require("shelljs")
const os = require("os")

const explorer = document.querySelector(".explorer")
let relativePath = "~"
let item

const clear() => {
  explorer.innerHTML = ""
}

const add(name) => {
  const item = document.createElement("div")
  const img = document.createElement("img")
  const text = document.createElement("p")
}
