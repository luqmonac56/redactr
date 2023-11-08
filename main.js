let message = document.getElementById("message"),
  displayWord = document.getElementById("display-word"),
  hideWord = document.getElementById("hide-word"),
  replacement = document.getElementById("replacement"),
  displaySentence = document.getElementById("display-sentence"),
  btn = document.getElementById("action-button");

let toBeHidden = [];
let obj;

hideWord.addEventListener("keydown", handleAddHiddenWord);

function handleAddHiddenWord(e) {
  if (
    e.key === " " ||
    e.keyCode === 32 ||
    e.key === "enter" ||
    e.keyCode === 13
  ) {
    e.preventDefault();
    toBeHidden.push(hideWord.value);
    hideWord.value = "";
    obj = Object.assign({}, toBeHidden);

    console.log(obj);
    console.log(toBeHidden);
    displayWord.innerText = toBeHidden;
  }
}

function handleClick(e) {
  e.preventDefault();

  let newString = toBeHidden.toString();

  console.log(newString);

  const regex = new RegExp(Object.values(obj).join("|"), "g");

  const replacedSentence = message.value.replace(regex, replacement.value);

  displaySentence.innerText = replacedSentence;

  console.log(replacedSentence);
  console.log(message);

  console.log(obj);
}

btn.addEventListener("click", handleClick);