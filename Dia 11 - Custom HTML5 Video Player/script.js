//Get our elements
const player = document.querySelector('.player');
const video = document.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelector('.player__slider');

//Build out functions
//Llamar a play o pause
function tooglePlay(){
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

function updateButton(){
    console.log('Update the button');
    const icon = this.paused ? '►' : '❚ ❚';
    //toggle button
    toggle.textContent = icon;
}

function skip(){
    console.log('Skipping!');
    console.log(this.dataset.skip);
    video.currentTime += parseFloat(this.dataset.skip);
}

//Hook up the event listeners
video.addEventListener('click', tooglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

toggle.addEventListener('click', tooglePlay);

skipButtons.forEach(button => button.addEventListener('click', skip));






