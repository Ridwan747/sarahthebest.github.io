document.addEventListener("DOMContentLoaded", function() {
  const hideContent = document.querySelector(".hide");
  hideContent.style.opacity = "0"; // Set initial opacity to '0'

  const bento1 = document.querySelector(".bento1");

  bento1.addEventListener("mouseenter", function() {
    hideContent.style.opacity = "1"; // Fade in on mouse enter
  });

  bento1.addEventListener("mouseleave", function() {
    hideContent.style.opacity = "0"; // Fade out on mouse leave
  });
});
