const shell = require("shelljs")
const os = require("os")

const explorer = document.querySelector(".explorer")
let relativePath = "~"

const clear = () => {
  explorer.innerHTML = ""
}

const add = (name) => {
  const item = document.createElement("div")
  const img = document.createElement("img")
  const text = document.createElement("p")

  let file = shell.cd(`${relativePath}/${name}`)
  file = file.code

  if (file == 0) {
    alert("é uma pasta")
  } else if (file != 0) {
    alert("é um arquivo")
  }
}

const dirs = shell.ls(relativePath)

dirs.forEach(el => {
  add(el)
});
