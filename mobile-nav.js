var backdrop = document.querySelector(".backdrop");
var toggleButton = document.querySelector(".toggle-button");
var mobileNav= document.querySelector(".mobile-nav");

backdrop.addEventListener("click", function() {
    mobileNav.classList.remove("open");
    backdrop.style.display = "none";
    setTimeout(function() {
      backdrop.classList.remove("open");
    }, 50);
});

toggleButton.addEventListener("click", function() {
  mobileNav.classList.add("open");
  backdrop.style.display = "block";
  setTimeout(function() {
    backdrop.classList.add("open");
  }, 10);
});
