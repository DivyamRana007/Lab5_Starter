// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {

  const jsConfetti = new JSConfetti();

  // if no value change is happening
  var curr_volume = document.getElementById('#volume');

  document.querySelector('#horn-select').addEventListener('change', (event) => {
    var val = event.target.value;
    var image = document.querySelector("img");
    var audio = document.querySelector("audio");
    if (val == 'air-horn'){
      image.src = 'assets/images/air-horn.svg';
      audio.src = 'assets/audio/air-horn.mp3';
    }
    else if (val == 'car-horn'){
      image.src = 'assets/images/car-horn.svg';
      audio.src = 'assets/audio/car-horn.mp3';
    }
    else if (val == 'party-horn'){
      image.src = 'assets/images/party-horn.svg';
      audio.src = 'assets/audio/party-horn.mp3';
    }
  });

  // if no value change is happening
  var curr_volume = document.querySelector('#volume');
  var audio = document.querySelector("audio");
  audio.volume = curr_volume.value/100;
  var image_vol = document.querySelector('#volume-controls').querySelector('img');
  image_vol.src = 'assets/icons/volume-level-2.svg';


  document.querySelector("#volume-controls").addEventListener("change", (event) => {
    var volume = event.target.value;
    var image_vol = document.querySelector('#volume-controls').querySelector('img');
    if (volume == 0){
      image_vol.src = 'assets/icons/volume-level-0.svg';
    }
    else if (volume < 33){
      image_vol.src = 'assets/icons/volume-level-1.svg';
    }
    else if (volume < 67){
      image_vol.src = 'assets/icons/volume-level-2.svg';
    }
    else {
      image_vol.src = 'assets/icons/volume-level-3.svg';
    }

    // Setting audio volume
    var audio = document.querySelector("audio");
    audio.volume = volume/100;

  }); 

  document.querySelector('button').addEventListener('click', (event) =>{
    var party_horn = document.querySelector('img');
    if (party_horn.src == 'assets/images/party-horn.svg'){
      jsConfetti.addConfetti()
      audio.play();
    }
    else {
      audio.play();
    }
  } );

}