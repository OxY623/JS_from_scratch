window.onload = function () {
// makes visible
    function fShow() {
    let divTime = document.getElementById("time");
    divTime.style.visibility = "visible";
  }
  
//   tic tac
  function ftick() {
    let date = new Date();
    let t = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    let divTime = document.getElementById("time");
    divTime.innerHTML = t;
  }

//  clock
  setTimeout(fShow, 2000);
  let timerId = setInterval(ftick, 1000);
  
  
//  stop timer
  setTimeout(function() {
    clearInterval(timerId)}, 10000 );
  
};
