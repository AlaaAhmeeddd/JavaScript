let images = Array.from(document.querySelectorAll(".images img"));
let slideNum = document.querySelector(".content p");
let nextButton = document.getElementById("next");
let prevButton = document.getElementById("prev");
var paginationElement = document.querySelector('ul');
let paginationItem = new Array(images.length);
for (var i = 1; i <= images.length; i++) {
    paginationItem[i-1] = document.createElement('li');
    paginationItem[i-1].appendChild(document.createTextNode(i));
    paginationElement.appendChild(paginationItem[i-1]);
}
let current = 1;
prevButton.classList.add("disabled");
slideNum.innerHTML = `Slide #${current} of ${images.length}`;
paginationItem[0].classList.add("on");
function clearAll(){
    for(let i = 0 ; i < images.length ; i++){
        images[i].classList.remove("active");
        paginationItem[i].classList.remove("on");
    }
}
nextButton.onclick = ()=> {
    clearAll();
    images[current].classList.add("active");
    paginationItem[current].classList.add("on");
    prevButton.classList.remove("disabled");
    current++;
    if(current === images.length) nextButton.classList.add("disabled");
    slideNum.innerHTML = `Slide #${current} of ${images.length}`
}
prevButton.onclick = ()=> {
    clearAll();
    current--;
    images[current-1].classList.add("active");
    paginationItem[current-1].classList.add("on");
    nextButton.classList.remove("disabled");
    if(current === 1) prevButton.classList.add("disabled");
    slideNum.innerHTML = `Slide #${current} of ${images.length}`
}
for(let i = 0 ; i < images.length ; i++){
    paginationItem[i].addEventListener("click", ()=> change(i))
}
function change(i){
    clearAll();
    current = i + 1;
    images[current-1].classList.add("active");
    paginationItem[current-1].classList.add("on");
    slideNum.innerHTML = `Slide #${current} of ${images.length}`
    if(current === 1) {prevButton.classList.add("disabled");}
    else {prevButton.classList.remove("disabled")}
    if(current === images.length) {nextButton.classList.add("disabled");}
    else {nextButton.classList.remove("disabled");}
}
