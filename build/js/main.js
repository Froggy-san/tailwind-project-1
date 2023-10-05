const buttons = document.querySelectorAll("[data-carousel-button]");

console.log(buttons);

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;

    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]");
    console.log(slides);
    const activeSlide = slides.querySelector("[data-active]");

    let newIndex = [...slides.children].indexOf(activeSlide) + offset;

    console.log(newIndex, "here");
    if (newIndex < 0) newIndex = slides.children.length - 1;
    console.log(newIndex);
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});

const navBurger = document.getElementById("nav-items");
const navBar = document.getElementById("side-bar");
const layout = document.getElementById("layout");
const allLi = document.getElementById("list").querySelectorAll("li");
const toggleTheme = document.getElementById("themes");
const switchs = toggleTheme.querySelectorAll(".switch");
console.log(switchs);
console.log(toggleTheme);
console.log(allLi);
console.log(navBurger);
console.log(navBar);
navBurger.addEventListener("click", () => {
  navBar.classList.toggle("remove-bar");
});

navBar.addEventListener("click", function (e) {
  const btn = e.target.closest("li");
  if (!btn) return;

  allLi.forEach((li) => li.classList.remove("mode-change"));
  btn.classList.add("mode-change");

  // if (e.target.closest("li").classList.contains("item")) {
  //   console.log(true);
  //   allLi.forEach((li) => li.classList.remove("mode-change"));
  //   e.target.classList.add("mode-change");
  // }
});

toggleTheme.addEventListener("click", function (e) {
  const btn = e.target.closest(".switch");
  if (!btn) return;
  switchs.forEach((switchs) => switchs.classList.remove("mode-change"));
  btn.classList.add("mode-change");

  // if (e.target.classList.contains("switch")) {
  //   switchs.forEach((switchs) => switchs.classList.remove("mode-change"));
  //   e.target.closest(".switch").classList.add("mode-change");
  // }
});
