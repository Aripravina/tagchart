document.addEventListener("DOMContentLoaded", function () {
  var toggleButtons = document.querySelectorAll(".toggle-button");
  toggleButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var targetId = this.getAttribute("data-target");
      var target = document.getElementById(targetId);
      if (target.style.display === "none" || target.style.display === "") {
        target.style.display = "block";
      } else {
        target.style.display = "none";
      }
    });
  });
});