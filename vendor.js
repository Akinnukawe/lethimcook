/**
 * Gallery Counter
 */
let counter = 1;

setInterval(() => {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 8) {
    counter = 1;
  }
}, 5000);

/**
 * Navigation Links
 */
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const targetId = link.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 110;
      window.scroll({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  });
});

/**
 * Scroll top button
 */
const scrollTop = document.querySelector(".scroll-top");
if (scrollTop) {
  const togglescrollTop = function () {
    window.scrollY > 100
      ? scrollTop.classList.add("active")
      : scrollTop.classList.remove("active");
  };
  window.addEventListener("load", togglescrollTop);
  document.addEventListener("scroll", togglescrollTop);
  scrollTop.addEventListener("click", (e) => {
    e.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}
