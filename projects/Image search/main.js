let searchForm = document.getElementById("search-form");
let searchInput = document.querySelector("#search-form input");
let searchResult = document.getElementById("search-result");
let showMore = document.getElementById("show-more");
let keyword = " ";
let page = 1;
const key = "1QDGaDMIfHF18Vxly_5wH12c1KdcEKiTxtG0hPOWBms";
async function getImages(){
    keyword = searchInput.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${key}&per_page=12`;
    const res = await fetch(url);
    const data = await res.json();
    const results = data.results;
    if(page === 1){
        searchResult.innerHTML = '';
    }
    results.map((result)=>{
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    })
    showMore.style.display = "block";
}
searchForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    page = 1;
    getImages();
});
showMore.addEventListener("click", ()=>{
    page++;
    getImages();
})
