const progressBar = document.getElementsByClassName('progress-bar')[0];
const computedStyle = getComputedStyle(progressBar);
var interval = setInterval(() => {

    const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0;
    progressBar.style.setProperty('--width', width + .1);

    if(document.querySelector('.progress-bar') && computedStyle.getPropertyValue('--width') >= 70){
        document.querySelector('.progress-bar').className += ' animate__animated animate__fadeOutDown';
        //document.removeChild(document.querySelector('.progress-bar'));
        document.querySelector('.progress-bar').hidden = true;
        clearInterval(interval);
    }
}, 2);

