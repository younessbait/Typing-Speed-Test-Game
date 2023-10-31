const words = [
  "Hello",
  "Programming",
  "Code",
  "Javascript",
  "Town",
  "Country",
  "Testing",
  "Youtube",
  "Linkedin",
  "Twitter",
  "Github",
  "Leetcode",
  "Internet",
  "Python",
  "Scala",
  "Destructuring",
  "Paradigm",
  "Styling",
  "Cascade",
  "Documentation",
  "Coding",
  "Funny",
  "Working",
  "Dependencies",
  "Task",
  "Runner",
  "Roles",
  "Test",
  "Rust",
  "Playing",
];
let one = document.querySelector(".one");
let tow = document.querySelector(".tow");
let three = document.querySelector(".three");
let level = document.querySelector(".lvl");
let sec = document.querySelector(".seconds");
let timeleft = document.querySelector(".time span");
let scortotal = document.querySelector(".total");
let all = document.querySelector(".all");
let scorinarray = document.querySelector(".got");
const lvls = {
  easy: 9,
  easyname: "Easy",
  normal: 6,
  normalname: "Normal",
  hard: 3,
  hardname: "Hard",
};
one.onclick = function () {
  start.style.display = "block";
  all.style.display = "none";
  timeleft.innerHTML = lvls.easy;
  sec.innerHTML = lvls.easy;
  level.innerHTML = lvls.easyname;
  window.localStorage.setItem("lvls", lvls.easy);
};
tow.onclick = function () {
  start.style.display = "block";
  all.style.display = "none";
  timeleft.innerHTML = lvls.normal;
  sec.innerHTML = lvls.normal;
  level.innerHTML = lvls.normalname;
  window.localStorage.setItem("lvls", lvls.normal);
};
three.onclick = function () {
  start.style.display = "block";
  all.style.display = "none";
  timeleft.innerHTML = lvls.hard;
  sec.innerHTML = lvls.hard;
  level.innerHTML = lvls.hardname;
  window.localStorage.setItem("lvls", lvls.hard);
};

scortotal.innerHTML = words.length;
scorinarray.innerHTML = 0;
let start = document.querySelector(".start");
let input = document.querySelector("input");
start.onclick = function () {
  start.remove();
  input.focus();
  addthewords();
};
input.onpaste = function () {
  input.style.borderColor = "red";
  input.style.color = "red";
  setTimeout(() => {
    input.style.borderColor = "#2196f3";
    input.style.color = "#2196f3";
    input.value = "";
  }, 1000);
};
let upcomingwords = document.querySelector(".upcoming-words");
let theword = document.querySelector(".the-word");
function addthewords() {
  let randomword = words[Math.floor(Math.random() * words.length)];
  theword.innerHTML = randomword;
  scorinarray.innerHTML++;
  let indexword = words.indexOf(randomword);
  words.splice(indexword, 1);
  upcomingwords.innerHTML = "";
  for (let i = 0; i < words.length; i++) {
    let div = document.createElement("div");
    let divstext = document.createTextNode(words[i]);
    div.appendChild(divstext);
    upcomingwords.appendChild(div);
  }
  if (words.length >= 0) {
    winnerweinnercheckedinner();
  }
}
let finish = document.querySelector(".finish");

function winnerweinnercheckedinner() {
  timeleft.innerHTML = window.localStorage.getItem("lvls");
  let x = setInterval(() => {
    timeleft.innerHTML--;
    if (timeleft.innerHTML == 0) {
      clearInterval(x);
      if (input.value.toUpperCase() === theword.innerHTML.toUpperCase()) {
        input.value = "";
        if (words.length > 0) {
          finish.innerHTML = "";
          addthewords();
        } else {
          finish.innerHTML = "";
          let div = document.createElement("div");
          div.className = "good";
          let texts = document.createTextNode("WINNER");
          div.appendChild(texts);
          finish.appendChild(div);
          upcomingwords.remove();
        }
      } else {
        finish.innerHTML = "";
        let div = document.createElement("div");
        div.className = "bad";
        let texts = document.createTextNode("ERROR");
        div.appendChild(texts);
        finish.appendChild(div);
        addthewords();
      }
    }
  }, 1000);
}
