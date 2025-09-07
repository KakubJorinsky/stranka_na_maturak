document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".icons a");

  links.forEach(link => {
    link.addEventListener("mouseover", () => {
      link.style.boxShadow = "0 0 15px gold";
    });
    link.addEventListener("mouseout", () => {
      link.style.boxShadow = "none";
    });
  });
});
