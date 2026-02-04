const text = "Thank You For Visiting!";
const typingElement = document.getElementById("typing");

let index = 0;
let isDeleting = false;

function typeEffect() {
  if (!isDeleting) {
    typingElement.textContent = text.slice(0, index);
    index++;

    if (index > text.length) {
      setTimeout(() => (isDeleting = true), 1000);
    }
  } else {
    typingElement.textContent = text.slice(0, index);
    index--;

    if (index === 0) {
      isDeleting = false;
    }
  }

  setTimeout(typeEffect, isDeleting ? 50 : 70);
}

typeEffect();
