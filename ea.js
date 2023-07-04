let menubtnE1 = document.querySelector(".humbugger-menu");
let mobileNavE1 = document.querySelector(".mobile-nav");
let closebuttonE1 = document.querySelector(".close-buttton");
menubtnE1.addEventListener("click", () => {
  if (mobileNavE1.style.display == "none" || !mobileNavE1.style.display) {
    mobileNavE1.style.display = "block";
  } else {
    mobileNavE1.style.display = "none";
  }
});

closebuttonE1.addEventListener("click", () => {
  mobileNavE1.style.display = "none";
});

// stop an event from getting an elemnt's children
document.querySelector("mobile-nav").addEventListener("click", (event) => {
  mobileNavE1.style.display = "none";
});
