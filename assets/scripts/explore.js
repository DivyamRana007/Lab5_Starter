// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  let voices = [];
  const voiceSelect = document.querySelector('select');
  
  function populateVoiceList() {
    voices = synth.getVoices();
  
    for (let i = 0; i < voices.length ; i++) {
      const option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
  
      if (voices[i].default) {
        option.textContent += ' — DEFAULT';
      }
  
      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      voiceSelect.appendChild(option);
    }
  }

  populateVoiceList();

  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  var lang = null;
  document.querySelector('#voice-select').addEventListener('change', (event) => {
    lang = event.target.value;
    console.log(lang);
  });

  document.querySelector('button').addEventListener('click', (event)=> {
    var text = document.querySelector('textarea').value;

    if (lang != null){
      const utterThis = new SpeechSynthesisUtterance(text);
      const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
      for (let i = 0; i < voices.length ; i++) {
        if (voices[i].name === selectedOption) {
          utterThis.voice = voices[i];
        }
      }
      synth.speak(utterThis);

      const speaking1 = synth.speaking;

      if(speaking1){
        var img = document.querySelector('img');
        img.src = 'assets/images/smiling-open.png';
      }
      
    }

  });

  function change_face(){var img = document.querySelector('img');
  img.src = 'assets/images/smiling.png';}
  
}