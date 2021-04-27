let slideIndexJS = 1;
var  slidesImg = document.querySelectorAll('.custom-card ');
var prev = document.getElementById('prev-btn');
var next = document.getElementById('next-btn');

function openModal(event, n){
    document.getElementById("my-modal").style.display = "inline-flex";
    document.body.style.overflow = "hidden";
    var title = event.dataset.title;
    var image = JSON.parse(event.dataset.img);

    var div = document.createElement('div');
    var imgdiv = document.createElement('img');

    prev.setAttribute('data-title', title);  prev.setAttribute('data-img', JSON.stringify(image));
    next.setAttribute('data-title', title);  next.setAttribute('data-img', JSON.stringify(image));


    imgdiv.alt = title;

    for(let k = 0; k < image.length ; k++){
        let url = image[k].url;
        div.className = "my-slides";
        div.setAttribute('data-index-number', " "+k+" / "+ image.length);
        imgdiv.src = url;
        imgdiv.className = "portrait-image image";

        div.appendChild(imgdiv);
        document.querySelector(".modal-body").appendChild(div);

    }

    var i;
    var slidesJS = document.getElementsByClassName('my-slides');

    if(n > slidesJS.length) { slideIndexJS = 1; }

    if (n < 1) { slideIndexJS = slidesJS.length; }

    for(let i=0 ; i < slidesJS.length; i++) {
        slidesJS[i].style.display = 'none';
    }

    slidesJS[slideIndexJS-1].style.display = "block";

    document.getElementById("index-number").innerHTML = slidesJS[slideIndexJS-1].getAttribute("data-index-number");

    var imagesJS = document.getElementsByClassName("image");
    document.getElementById('caption').innerHTML = imagesJS[slideIndexJS-1].alt;

}

function closeModal(){
    document.getElementById("my-modal").style.display = "none";
    document.body.style.overflow = "auto";
    var slide = document.querySelectorAll(".my-slides");
    for(let i = 0 ; i < slide.length ; i++){
        document.querySelector(".modal-body").removeChild(slide[i]);
    }
}

function changesSlide(event, n) {
    closeModal();
    openModal( event, slideIndexJS += n);
}

function currentSlide(n){
    console.log(n);
    showSlides(slideIndexJS = n);
}




    /**
     *
     *      EVENT
     *
     */

/*
        for(const img of slidesImg){
            img.addEventListener('click', function (event) {
                openModal(event.target, 0 );
            });
        }
*/

        prev.addEventListener('click', function (event) {
            closeModal();
            openModal(event.target, -1);
        });

        next.addEventListener('click', function (event) {
            closeModal();
            openModal(event.target, 1);
        });









/**
function showSlides(event){
    entireModal(event);

    var i;
    var slidesJS = document.getElementsByClassName('my-slides');

    if(n > slidesJS.length) { slideIndexJS = 1; }

    if (n < 1) { slideIndexJS = slidesJS.length; }

    for(let i=0 ; i < slidesJS.length; i++) {
        slidesJS[i].style.display = 'none';
    }

    slidesJS[slideIndexJS-1].style.display = "block";

    document.getElementById("index-number").innerHTML = slidesJS[slideIndexJS-1].getAttribute("data-index-number");

    var imagesJS = document.getElementsByClassName("image");
    document.getElementById('caption').innerHTML = imagesJS[slideIndexJS-1].alt;

}

function entireModal(event) {
    var title = event.dataset.title;  //document.getElementById((n+d)).data('title');
    var image = JSON.parse(event.dataset.img);  //document.getElementById((n+d)).data('img');

    var div = document.createElement('div');
    var imgdiv = document.createElement('img');

    imgdiv.alt = title;

    for(let k = 0; k < image.length ; k++){
        let url = image[k].url;
        div.className = "my-slides";
        div.setAttribute('data-index-number', " "+k+" / "+ image.length);
        imgdiv.src = url;
        imgdiv.className = "portrait-image image";

        div.appendChild(imgdiv);
        document.querySelector(".modal-body").appendChild(div);

    }
}*/



