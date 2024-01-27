let ele = document.querySelector(".scroll-page");

let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll" , ()=> {
    const top = document.documentElement.scrollTop;
    ele.style.width = `${(top / height) * 100}%`;
})
