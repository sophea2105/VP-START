var i = 0;
function banner() {
  var imgs = [
    "url(./images/vp-start.png)",
    "url(./images/vp-start1.png)",
    "url(./images/vp-start2.jpg)",
  ];

  if (i < imgs.length - 1) {
    i++;
  } else {
    i = 0;
  }
  document.getElementById("homePage").style.backgroundImage = imgs[i];
  setTimeout(banner, 3000);
}
banner();
function load() {
  document.getElementById("welcome").style.display = "block";
  document.getElementById("welcome").style.animationDuration = "4s";
  document.getElementById("welcome").style.animationName = "text";
}
function menu() {
  document.getElementById("phone").style.width = "100%";
}
function x() {
  document.getElementById("phone").style.width = "0%";
}
function leave() {
  document.getElementById("phone").style.width = "0%";
}
