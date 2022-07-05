window.onload = function () {
  function fShow() {
    let divTime = document.getElementById("time");
    divTime.style.visibility = "visible";
  }

  function fTick() {
    let date = new Date();
    let t = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    let divTime = document.getElementById("time");
    divTime.innerHTML = t;
  }
  setTimeout(fShow, 2000);
  setInterval(fTick, 1000);
};
