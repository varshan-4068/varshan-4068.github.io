const TYPING_PHRASES = [
  "nmap -sV -O -p 80,443,21,22,23,25,53,3389 varshan-4068.github.io",
  "Welcome to my portfolio",
  "whoami: Cloud, Web Application and API Pentester"
];

function startTypingEffect() {
  const el = document.getElementById("typing");
  if (!el) return;

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function tick() {
    const phrase = TYPING_PHRASES[phraseIndex];

    if (!isDeleting) {
      charIndex++;
      el.textContent = phrase.slice(0, charIndex);
      if (charIndex === phrase.length) {
        isDeleting = true;
        setTimeout(tick, 1200);
        return;
      }
    } else {
      charIndex--;
      el.textContent = phrase.slice(0, charIndex);
      if (charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % TYPING_PHRASES.length;
      }
    }

    setTimeout(tick, isDeleting ? 35 : 65);
  }

  tick();
}

function initNavToggle() {
  const toggle = document.getElementById("navToggle");
  const menu = document.getElementById("navMenu");
  if (!toggle || !menu) return;

  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  menu.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  startTypingEffect();
  initNavToggle();
});
