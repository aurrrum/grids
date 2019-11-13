var backdrop = document.querySelector(".backdrop");
var toggleButton = document.querySelector(".toggle-button");
var mobileNav= document.querySelector(".mobile-nav");

backdrop.addEventListener("click", function() {
  // mobileNav.style.display = "none";
    mobileNav.classList.remove("open");
    backdrop.style.display = "none";
    setTimeout(function() {
      backdrop.classList.remove("open");
    }, 50);
});

toggleButton.addEventListener("click", function() {
  // mobileNav.style.display = "block";
  // backdrop.style.display = "block";
  mobileNav.classList.add("open");
    // this isneeded to animate elemet with display property defined
  backdrop.style.display = "block";
  setTimeout(function() {
    backdrop.classList.add("open");
  }, 10);
});
