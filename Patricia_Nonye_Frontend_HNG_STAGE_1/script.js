document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.getElementById("menu-icon");
  const navLinks = document.getElementById("nav-links");
  const navItems = navLinks.querySelectorAll("a");
  const backToTopButton = document.getElementById("back-to-top");

  // Handles navigation bar visibility in mobile view
  menuIcon.addEventListener("click", function () {
    navLinks.classList.toggle("showing");
    menuIcon.classList.toggle("change");
  });

  navItems.forEach((item) => {
    item.addEventListener("click", function () {
      navLinks.classList.remove("showing");
      menuIcon.classList.remove("change");
    });
  });

  // Handles scrolling to top from bottom
  window.addEventListener("scroll", function () {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  });

  backToTopButton.addEventListener("click", function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });

  // Handles Current Time in UTC and Current Day of the week
  function updateTime() {
    const timeElement = document.getElementById("time");
    const dayElement = document.getElementById("day");

    const now = new Date();
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const dayOfWeek = days[now.getUTCDay()];
    const timeString = now.toUTCString().split(" ")[4];
    timeElement.textContent = "Current Time in UTC: " + timeString;
    dayElement.textContent = "Current Day of the week: " + dayOfWeek;
  }

  setInterval(updateTime, 1000);
  updateTime();
});
