var videosEl = document.getElementById("videos");

var a = 0;


document.onload = function () {
  while (a < videosEl.length) {
    videosEl[a].play();
    
    a++;
}  
}
