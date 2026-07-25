const products = [

{
id:1,

name:"Gaming Laptop",

category:"Laptop",

image:"images/laptop.jpg",

oldPrice:389000,

price:354500,

discount:"10%",

rating:"★★★★★",

stock:"In Stock",

description:
"High performance gaming laptop with powerful processor, dedicated graphics card and fast SSD storage."

},


{
id:2,

name:"Gaming Keyboard",

category:"Keyboard",

image:"images/keyboard.jpg",

oldPrice:5000,

price:4500,

discount:"5%",

rating:"★★★★☆",

stock:"In Stock",

description:
"Mechanical RGB gaming keyboard with anti-ghosting keys and durable switches."

},


{
id:3,

name:"Gaming Mouse",

category:"Mouse",

image:"images/mouse.jpg",

oldPrice:10000,

price:8500,

discount:"15%",

rating:"★★★★★",

stock:"In Stock",

description:
"High precision gaming mouse with adjustable DPI and RGB lighting."

}


];



// Get Product ID from URL

const urlParams = new URLSearchParams(window.location.search);

const id = Number(urlParams.get("id"));


// Find Product

const product = products.find(
p => p.id === id
);



const container =
document.getElementById("product-details");



if(product){


container.innerHTML = `


<div class="product-details">


<div>

<img src="${product.image}">

</div>



<div class="product-info">


<span class="discount">

-${product.discount}

</span>


<h1>

${product.name}

</h1>



<p class="category">

${product.category}

</p>



<div class="rating">

${product.rating}

</div>



<p class="price">

<del>

Rs.${product.oldPrice.toLocaleString()}

</del>


<strong>

Rs.${product.price.toLocaleString()}

</strong>


</p>



<span class="stock">

${product.stock}

</span>



<p class="product-description">

${product.description}

</p>



<div class="quantity-box">


<button onclick="changeQty(-1)">
-
</button>


<input id="qty"
value="1"
readonly>


<button onclick="changeQty(1)">
+
</button>


</div>



<button

class="add-cart buy-btn"

data-id="${product.id}"

data-name="${product.name}"

data-price="${product.price}"

data-image="${product.image}">

<i class="fa-solid fa-cart-shopping"></i>

Add To Cart

</button>


</div>


</div>


`;



}
else{


container.innerHTML =
"<h2>Product Not Found</h2>";


}




function changeQty(value){

let qty =
document.getElementById("qty");


let current =
Number(qty.value);


current += value;


if(current < 1)
current = 1;


qty.value=current;


}