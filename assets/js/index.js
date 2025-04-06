const d = document;
const w = window;
const $header = d.getElementById("header");
const $section1 = d.getElementById("section-1");
const $section4 = d.getElementById("section-4");
const $section5 = d.getElementById("section-5");
const $section7 = d.getElementById("section-7");
const $textEffect = d.getElementById("text-effect");

// Header
const deactivateHeader = () => {
  $header.classList.remove("active");
};

const activateHeader = () => {
  $header.classList.add("active");
};

const headerEffect = () => {
  const scrollPosition = w.scrollY;

  if (scrollPosition > 0) activateHeader();
  else deactivateHeader();
};

window.addEventListener("scroll", () => {
  headerEffect();
});

// Text Effect

async function textEffect(textList, $element) {
  while (true) {
    for (let text of textList) {
      $element.innerHTML = "";
      for (let letter of text) {
        await new Promise((resolve) => {
          setTimeout(() => {
            $element.innerHTML += letter;
            resolve();
          }, 50);
        });
      }
      await new Promise((resolve) => setTimeout(resolve, 5000));
    }
  }
}

const textList = [
  "A sanctuary for living, connecting, and thriving",
  "The Central American destination set to captivate travelers and investors in 2025",
  "Transform your future with Palma Bonita",
];

textEffect(textList, $textEffect);

// Funcionalidad para las pestañas
document.querySelectorAll(".tab-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const tabId = button.getAttribute("data-tab");

    // Remover clase active de todos los botones y contenidos
    document
      .querySelectorAll(".tab-btn")
      .forEach((btn) => btn.classList.remove("active"));
    document
      .querySelectorAll(".tab-content")
      .forEach((content) => content.classList.remove("active"));

    // Agregar active al botón clickeado y su contenido correspondiente
    button.classList.add("active");
    document.getElementById(`${tabId}-tab`).classList.add("active");
  });
});

// Intersection Observer Functions

const observerFunction = () => {
  const observerSection = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.4,
    }
  );
  const observerSection2 = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0,
    }
  );

  observerSection.observe($section1);
  observerSection.observe($section4);
  observerSection.observe($section5);
  observerSection2.observe($section7);
};

window.addEventListener("DOMContentLoaded", () => {
  headerEffect();
  observerFunction();
});
