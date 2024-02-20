document.addEventListener("DOMContentLoaded", function() {
  const hideContent = document.querySelector(".hide");
  hideContent.style.opacity = "0";

  const bento1 = document.querySelector(".bento1");

  bento1.addEventListener("mouseenter", function() {
    hideContent.style.opacity = "1"; 
  });

  bento1.addEventListener("mouseleave", function() {
    hideContent.style.opacity = "0"; 
  });
});
