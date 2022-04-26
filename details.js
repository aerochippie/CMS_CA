const queryString = window.location.search;
const id = new URLSearchParams(queryString).get('id');


const baseUrl = `https://rougecub.com/wp-json/wc/store/products/${id}`;

const detailContainer = document.querySelector(".product-detail")


    async function getDetail(){
        try{
            const response = await fetch(baseUrl);
            const details = await response.json();
            displayItem(details);
    
        }
        catch(error){
            console.error(error)
            console.log("An error occured")
            detailContainer.innerHTML="Something went wrong :(";
        }
       
    }
    getDetail();

function displayItem(details){
    detailContainer.innerHTML =`
 <div class="detail-container">

    <h4>${details.name}</h4>
    <h5>${details.short_description}</h5>
   
    <div class="item-img"><img src="${details.images[0].src}">
         </div>
         <p> PRICE:  ${details.prices.price}${details.prices.currency_symbol}<br>
         About the drink: <br> ${details.description} </p>
         <a  href="index.html"> Back to drinks </a>
    </div>
    `

}