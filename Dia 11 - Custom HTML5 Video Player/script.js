//Get our elements
const player = document.querySelector('.player');
const video = document.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

//Build out functions
//Llamar a play o pause
function tooglePlay() {
    /*
    if(video.paused){
        video.play();
    }else{
        video.pause();
    }
    */
    const method = video.paused ? 'play' : 'pause';
    video[method]();
}

function updateButton() {
    console.log('Update the button');
    const icon = this.paused ? '►' : '❚ ❚';
    //toggle button
    toggle.textContent = icon;
}

function skip() {
    console.log('Skipping!');
    console.log(this.dataset.skip);
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
    console.log(this.value);
    console.log(this.name);
    video[this.name] = this.value;
}

function handleProgress() {
    //Actualizar  flex-basics
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

//Hook up the event listeners
video.addEventListener('click', tooglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', tooglePlay);

skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));





