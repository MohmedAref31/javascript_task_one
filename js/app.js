var products = document.querySelectorAll("#products .mobile");
var addToCard = document.querySelectorAll("#products .mobile .add-to-card")
var productsImage = document.querySelectorAll("#products .mobile img")
var cardItems = document.getElementById("card-items");
var showPrice =document.getElementById("show-price");
var priceBtn = document.getElementById("price-btn");
var totalPrice = 0 ;
// console.log(products[0])
// console.log(productsImage[2].src)
// products.forEach(function (mobile,i){
    
//    addToCard.forEach(function(btn){
//        btn.onclick=function(){console.log(btn);} 
//    })
// })

addToCard.forEach(function(btn,i){
    btn.onclick=function(){
        totalPrice += +(products[i].getAttribute("price"))
        cardItems.innerHTML += `
        <li class="card-item">
        <div class="card-item-image">
          <img src="${productsImage[i].src}" >
        </div>
        <p class="card-item-price">
          ${products[i].getAttribute("price")}
        </p>
      </li>
        `;

        showPrice.innerText = "Total price " + totalPrice;
        showPrice.innerText+=" L.E"
        priceBtn.style.display="block";
    } 


})

priceBtn.onclick= function(){
  showPrice.style.display="block"
}


