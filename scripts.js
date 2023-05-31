var modal = document.getElementById("myModal");

var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

window.onload = () => {
  const isModalAlreadyShown = window.localStorage.getItem("modalShown");

  if (!isModalAlreadyShown) {
    window.localStorage.setItem("modalShown", "true");
    modal.style.display = "flex";
  }
};
