//.burgerをクリックしたら各クラスに"isActive"を付与

const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  nav.classList.toggle("open");
});

// wrksエリア　下層ページのOP
$(window).on("load", function () {
  setTimeout(function () {
    $("#opening").addClass("hide");
  }, 1000);
});

document.addEventListener("DOMContentLoaded", () => {
  const animations = document.querySelectorAll(".animation");

  const observerOptions = {
    root: null, // ビューポートを基準
    threshold: 0.3, // 30%がビューポートに入った時に発火
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (!entry.target.classList.contains("is-active")) {
          entry.target.classList.add("is-active");
        }
        entry.target.classList.add("is-active");
      } else {
      }
    });
  }, observerOptions);

  animations.forEach((item) => {
    observer.observe(item); // 各要素を監視
  });
});
