var drum = document.querySelectorAll(".drum");
for (var i = 0; i < drum.length; i++) {
  drum[i].addEventListener("click", function() {
    var audio = new Audio('.\sounds\snare.mp3');
    audio.play();
  });
}
