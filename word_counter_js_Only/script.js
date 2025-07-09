const textArea = document.getElementById("textarea");
const count = document.getElementById("count");
const display = document.getElementById("countedWords");
const err = document.getElementById("errorMsg");
  function countWords() {
    const text = textarea.value.trim();
    if(text === ""){
        err.style.display="flex";
        err.textContent = "Please enter a text in textarea!";
    }else{
    const words = text.split(/\s+/).filter(Boolean);
    if(err.style.display="flex"){
        err.style.display="none";
    }
    display.style.display="flex";
    display.textContent = `Word count: ${words.length}`;
    }
  }
  count.addEventListener('click', countWords);