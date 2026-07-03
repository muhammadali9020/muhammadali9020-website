//responsive code
const navBarContainer = document.getElementById("navbar-container");
const hamBurger = document.getElementById("ham-burger");
const navItems = document.querySelectorAll(".nav-items");

const classToggle = () => {
  navBarContainer.classList.toggle("h-full");
};
navItems.forEach((els) => {
  els.addEventListener("click", () => {
    classToggle();
  });
});

hamBurger.addEventListener("click", classToggle);
// tost message
document.addEventListener("DOMContentLoaded", () => {
  const toast = document.getElementById("toast");

  window.Toast = (text = "please set the text") => {
    toast.textContent = text;
    toast.classList.remove("translate-x-85");
    setTimeout(() => {
      toast.classList.add("translate-x-85");
    }, 2000);
    console.log(toast.classList);
  };
});

// Send Message
const messageForm = document.getElementById("message-form");
messageForm.addEventListener("submit", (e) => {
  e.preventDefault();
  emailjs
    .sendForm(
      "service_zsja1g9",
      "template_1dh9h1k",
      messageForm,
      "Rr13EpSkb_aB52bsg",
    )
    .then((e) => Toast(" 📩 Email Send SuccessFully "))
    .catch((e) => Toast(` 📩 ${e}`));
});

// gsap animation
gsap.from(".hero-text", {
  opacity: 0,
  y: 100,
  stagger: 0.2,
  duration: 1,
});
gsap.from(".hero-img", {
  x: 150,
  duration: 1,
  opacity: 0,
});
gsap.from(".header-item", {
  x: -10,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  ease: "power2.out",
});
// gsap ScrollTrigger
gsap.registerPlugin(ScrollTrigger);
gsap.from(".about-text", {
  y: -20,
  duration: 1,
  opacity: 0,
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".about-text",
    start: "top 65%",
  },
});
gsap.from(".about-img", {
  y: 80,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".about-img",
    start: "top 65%",
  },
});
gsap.from(".skill-box", {
  y: -100,
  opacity: 0,
  duration: 1,
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".skill-box",
    start: "top 65%",
  },
});

gsap.from(".project-section-box-1", {
  x: -100,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".project-section-box-1",
    start: "top 65%",
  },
});

gsap.from(".project-section-box-2", {
  y: -100,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".project-section-box-2",
    start: "top 65%",
  },
});

gsap.from(".project-section-box-3", {
  x: 100,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".project-section-box-3",
    start: "top 65%",
  },
});
gsap.from(".footer-section-text", {
  y: 100,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".footer-section-text",
    start: "top 65%",
  },
});
gsap.from(".footer-section-box", {
  y: -100,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".footer-section-box",
    start: "top 65%",
  },
});
