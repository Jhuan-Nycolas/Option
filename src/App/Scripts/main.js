const shell = require("shelljs");
const os = require("os");

const explorer = document.querySelector(".explorer");
const syst = os.platform();
const username = os.userInfo().username;
let home;
let directory;

if (syst == "win32") {
  home = `C:\\users\\${username}`;
} else if (syst == "linux") {
  home = `/home/${username}`;
}

directory = home;

function add(item) {
  const dir = document.createElement("div");
  dir.classList.add("explorer-item");

  let barra;

  if (syst == "win32") {
    barra = "\\";
  } else if (syst == "linux") {
    barra = "/";
  }

  let file = shell.cd(directory, barra, item).code;

  let name = document.createElement("p");
  name.textContent = item;
  name.classList.add("text");
  dir.appendChild(name);

  let img;

  if (file == 0) {
    img = document.createElement("img");
    img.src = "assets/folder.png";
    img.classList.add("img");
    dir.appendChild(img);
  } else if (file != 0) {
    img = document.createElement("img");
    img.src = "assets/file.png";
    img.classList.add("img");
    dir.appendChild(img);
  }

  explorer.appendChild(dir);
}

let dirs;

if (syst == "win32") {
  dirs = shell.exec(`dir ${directory}`);
} else if (syst == "linux") {
  dirs = shell.ls(directory);
}

dirs.forEach((value) => {
  add(value);
});
