function changeButtonStyle(options) {
  let danger_btns = document.querySelectorAll(".danger");
  let success_btns = document.querySelectorAll(".success");

  danger_btns.forEach((btn) => {
    btn.style.backgroundColor = "red";
    btn.style.color = "#FFF";
    btn.style.border = "none";
    btn.style.padding = "8px 15px";
    btn.style.cursor = "pointer";
    btn.style.borderRadius = "8px";
    btn.style.webkitUserSelect = "none";
  });

  success_btns.forEach((btn) => {
    btn.style.backgroundColor = "rgb(80, 255, 80)";
    btn.style.color = "#FFF";
    btn.style.border = "none";
    btn.style.padding = "8px 15px";
    btn.style.cursor = "pointer";
    btn.style.borderRadius = "8px";
    btn.style.webkitUserSelect = "none";
  });
}
