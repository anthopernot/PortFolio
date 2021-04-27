const progressBar = document.getElementsByClassName('progress-bar')[0];
const computedStyle = getComputedStyle(progressBar);


window.addEventListener('load', function () {
    if(window.matchMedia("(max-width:400px)").matches) {
        document.querySelector('.progress-bar').style.width = '250px';
    }

    if(window.matchMedia("(max-width:1000px)").matches && window.matchMedia("(min-width:400px)").matches) {
        document.querySelector('.progress-bar').style.width = '350px';
    }

    var interval = setInterval(() => {

        const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0;
        progressBar.style.setProperty('--width', width + .1);

        if(document.querySelector('.progress-bar') && computedStyle.getPropertyValue('--width') >= 65){

            document.querySelector('.progress-bar').addEventListener('animationiteration', function () {
                document.querySelector('.progress-bar').classList.add(' animate__animated',' animate__fadeOut');
            });
            //document.removeChild(document.querySelector('.progress-bar'));
            document.querySelector('.progress-bar').hidden = true;
            document.getElementById('main').hidden = false;
            clearInterval(interval);
        }
    }, 3);

});

