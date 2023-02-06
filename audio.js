let currentAudio;

for (var i = 0; i < 4; i++) {
  document.querySelectorAll(".myButton")[i].addEventListener("click", function () {
      var text = this.innerHTML;
      console.log(text);
      if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
      }
      currentAudio = audioPlay(text);
    });
}


// document.addEventListener("keypress", function(event){
//   var text = event.key;
//   audioPlay(text);
// })



function audioPlay(text) {
  let audio;
  switch (text) {
    case "Bones":
      audio = new Audio("sounds/bones.mp3");
      audio.play();
      break;

    case "Country Road":
      audio = new Audio("sounds/country.mp3");
      audio.play();
      break;

    case "Enemy":
      audio = new Audio("sounds/enemy.mp3");
      audio.play();
      break;

    case "Yalgar":
      audio = new Audio("sounds/yalgar.mp3");
      audio.play();
      break;
  }
  return audio;
}