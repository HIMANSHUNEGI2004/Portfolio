function openLinkedIn() {
  window.open("https://www.linkedin.com/in/alien07/", "_blank");
}

function openGitHub() {
  window.open("https://github.com/HIMANSHUNEGI2004", "_blank");
}

function openLeetcode() {
  window.open("https://leetcode.com/u/_alien__07/", "_blank");
}

const sequences = [
  ["B.Tech", "Graduate"],
  ["Software", "Engineer"]
];

let currentSeq = 0;
let wordIndex = 0;
let letterIndex = 0;
let displayText = "";
const typingEl = document.getElementById("typing-text");

function typeLetter() {
  const currentWord = sequences[currentSeq][wordIndex];

  if (letterIndex < currentWord.length) {
    displayText += currentWord[letterIndex];
    typingEl.textContent = displayText;
    letterIndex++;
    setTimeout(typeLetter, 150);
  } else {
    wordIndex++;
    if (wordIndex < sequences[currentSeq].length) {
      displayText += " ";
      letterIndex = 0;
      setTimeout(typeLetter, 500);
    } else {
      setTimeout(() => {
        displayText = "";
        wordIndex = 0;
        letterIndex = 0;
        currentSeq = (currentSeq + 1) % sequences.length;
        typingEl.textContent = "";
        setTimeout(typeLetter, 1000);
      }, 1500);
    }
  }
}

typeLetter();

