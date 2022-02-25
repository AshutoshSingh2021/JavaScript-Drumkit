window.addEventListener('keydown', function(e){
const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
if(!audio) return; // Stop the function from running all together 
audio.currentTime = 0;  // Rewind to the start
audio.play();
console.log(key);

// key.addClass('playing');
key.classList.add('playing');
// key.classList.remove('playing');
// key.classList.toggle('playing');
// setTimeout(function() {
    
// }, 0.07);
});

function removeTransition(e){
if(e.propertyName !== 'transform') return;  // skip it if its not a transform
console.log(e.propertyName);
}
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitioned', removeTransition ));