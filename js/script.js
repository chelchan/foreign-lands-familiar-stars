let vrVideo = document.getElementById("vrVideo");
let videoL = document.getElementById("video-L");
let videoR = document.getElementById("video-R");

//   unmuteButton.addEventListener('click', function() {
//     video.muted = false;
//   });

var btn = document.getElementById("unmute-button");
var btnL = document.getElementById("unmute-button-L");
var btnR = document.getElementById("unmute-button-R");

function unmute() {
  if (vrVideo.muted) {
    vrVideo.muted = false;
    btn.innerHTML = "No Sound";
  } else {
    vrVideo.muted = true;
    btn.innerHTML = "Sound";
  }
}

function unmuteL() {
  if (videoL.muted) {
    videoL.muted = false;
    btnL.innerHTML = "No Sound";
  } else {
    videoL.muted = true;
    btnL.innerHTML = "Sound";
  }
}

function unmuteR() {
  if (videoR.muted) {
    videoR.muted = false;
    btnR.innerHTML = "No Sound";
  } else {
    videoR.muted = true;
    btnR.innerHTML = "Sound";
  }
}
