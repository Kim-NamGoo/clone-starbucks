const searchEl = document.querySelector(".search");
const searchInput = searchEl.querySelector("input");
const searchIcon = searchEl.querySelector(".material-icons");

function focusInput() {
  searchInput.focus();
}

function searchIconDelete() {
  searchIcon.classList.add("delete");
  searchInput.setAttribute("placeholder", "검색");
}

function searchIconReturn() {
  searchIcon.classList.remove("delete");
  searchInput.removeAttribute("placeholder", "검색");
}

searchIcon.addEventListener("click", focusInput);
searchInput.addEventListener("focus", searchIconDelete);
searchInput.addEventListener("blur", searchIconReturn);

const badgeEl = document.querySelector("header .badges");

function badgeHide() {
  if (window.scrollY > 500) {
    gsap.to(badgeEl, 0.6, { opacity: 0, display: "none" });
  } else {
    gsap.to(badgeEl, 0.6, { opacity: 1, display: "block" });
  }
}

window.addEventListener("scroll", _.throttle(badgeHide, 300));
