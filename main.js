const baseUrl = "https://rougecub.com/wp-json/wc/store/products"
const itemContainer = document.querySelector(".products")
const buttonAmount = document.querySelector(".amount-per-page");
const searchButton = document.querySelector(".search-button");
const featured = document.querySelector(".checkbox");

async function getItems(url){ 
    
    const response = await fetch(url);
    const items = await response.json();
    console.log(items);
    items.forEach(function(item){
        itemContainer.innerHTML += `
        <div class="item"><h2>${item.name}</h2>
        <div class="item-img"><a href="details.html?id=${item.id}"><img src="${item.images[0].src}"></a>
         </div>`
    })
}

getItems(baseUrl);


buttonAmount.onclick = function(event){
    let newUrl = baseUrl + `?per_page=${event.target.value}`;
    itemContainer.innerHTML ="";
    getItems(newUrl)
}



featured.addEventListener('change', () =>
{
    if(featured.checked){
       let newUrl = baseUrl + "?featured=true";
       itemContainer.innerHTML ="";
       getItems(newUrl)
    }
    else{
        itemContainer.innerHTML ="";
        getItems(baseUrl + "?per_page=20")
    }
})



searchButton.onclick = function(){

    const searchField = document.querySelector("#search-field").value;
    const newUrl = baseUrl +`?search=${searchField}`;
    itemContainer.innerHTML ="";
    getItems(newUrl);
}




