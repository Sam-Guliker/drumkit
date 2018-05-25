// Main function
var keys = document.querySelectorAll('.key');
var img = document.getElementsByTagName('img')[0];
var html = document.getElementsByTagName('html')[0]
var h1 = document.getElementsByTagName('h1')[0];


function removeAudioControlls() {
  var audioControls = document.getElementsByTagName('audio');
  var f;

  for (f = 0; f < audioControls.length; f++) {
    audioControls[f].controls = false;
  }
}
removeAudioControlls()

function playSound(e) {
  var keycode = e.keyCode ? e.keyCode : e.target.getAttribute('data-key');
  var audio = document.querySelector("audio[data-key=" + "'" + keycode + "'" + "]");
  var key = document.querySelector(".key[data-key=" + "'" + keycode + "'" + "]");

  if (!audio) return; // stopt de functie

  audio.load(); // rewind to the start
  audio.play();

  key.classList.add('playing');
};

function removeTransition(e) {
  if (e.propertyName !== 'transform') return; // skip if it's not a transform
  this.classList.remove('playing');
}

for (var x = 0; x < keys.length; x++) {
  keys[x].addEventListener('transitionend', removeTransition);
}

for (var i = 0; i < keys.length; i++) {
  if(window.addEventListener){
    keys[i].addEventListener('click', playSound);
    keys[i].addEventListener('focus', playSound);
  } else{
    keys[i].attachEvent('onclick',playSound);
  }
}

if(window.addEventListener){
  window.addEventListener('keydown', playSound);
} else {
  window.attachEvent('onkeydown', playSound);
}


// Enhancement
if (AudioContext && navigator.mediaDevices.getuserMedia in window) {
  audioCheck();
} else {
  console.log("I'm sorry your browser doesn't support fun");
}

function audioCheck() {
  var video = document.querySelector('video');
  var main, recordButton, stopButton, playButton, pauseButton, canvas, audioContext, playBack, div, recording, isRecording;

  main = document.querySelector('main');
  recordButton = document.createElement('button');
  stopButton = document.createElement('button');
  playBack = document.createElement('section');
  div = document.createElement('div');
  recording = document.querySelector('.record');
  isRecording = false;

  audioContext = new(window.AudioContext || webkitAudioContext)()

  // var canvasCtx = canvas.getContext("2d")
  var constraints = {
    audio: true,
    video: false
  }

  var chunks = [];

  recordButton.innerHTML = 'record';
  recordButton.setAttribute('class', 'record');
  stopButton.innerHTML = 'stop';
  stopButton.setAttribute('class', 'stopRecord');

  main.append(div);
  div.append(recordButton, stopButton, playBack);
  recordButton.addEventListener('click', startRecording);

  function startRecording() {
    if(isRecording == true){
      return;
    }
    isRecording = true;
    recordButton.classList.add('active');
    navigator.mediaDevices.getUserMedia(constraints).then(onSuccess, onError);
  }

  var onSuccess = function(stream) {
    // Starts recording
    console.log("I'm recording")
    var mediaRecorder = new MediaRecorder(stream);
    mediaRecorder.start();

    stopButton.addEventListener('click', function() {
      console.log("I'm stopping now");
      mediaRecorder.stop();
    })

    mediaRecorder.onstop = function(e) {

      isRecording = false
      recordButton.classList.remove('active')
      var audioName = prompt('Enter a name for your sound clip?', 'My unnamed clip');

      var blob = new Blob(chunks, { 'type': 'audio/ogg; codecs=opus' });
      chunks = [];
      var audioURL = window.URL.createObjectURL(blob);

      playBack.insertAdjacentHTML('beforeend', '<article class="clip" id="' + audioName + '"><h2>' + audioName + '</h2><audio controls="" src="' + audioURL + '"></audio></article>');

    }

    mediaRecorder.ondataavailable = function(e) {
      chunks.push(e.data);
      console.log(chunks);
    }

  }

    var onError = function(err) {
      console.log('The following error occured: ' + err);
    }

}
