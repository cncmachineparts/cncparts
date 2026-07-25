let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartItems = document.getElementById("cart-items");
const totalElement = document.getElementById("total");

renderCart();

function renderCart() {

    cartItems.innerHTML = "";

    let netTotal = 0;

    cart.forEach((item, index) => {

        let itemTotal = item.price * item.quantity;

        netTotal += itemTotal;

        cartItems.innerHTML += `

        <tr>

            <td>
                <img src="${item.image}" width="80">
            </td>

            <td>
                ${item.name}
            </td>

            <td>
                Rs. ${item.price.toLocaleString()}
            </td>

            <td>

    <button onclick="decrease(${index})">−</button>

    <span class="qty">
        ${item.quantity}
    </span>

    <button onclick="increase(${index})">+</button>

</td>

            <td>
                Rs. ${itemTotal.toLocaleString()}
            </td>

            <td>
                <button onclick="removeItem(${index})">
                    Remove
                </button>
            </td>

        </tr>

        `;

    });

    totalElement.textContent =
        "Net Total : Rs. " + netTotal.toLocaleString();

}

function increase(index){

    cart[index].quantity++;

    saveCart();

}

function decrease(index){

    if(cart[index].quantity > 1){

        cart[index].quantity--;

    }else{

        cart.splice(index,1);

    }

    saveCart();

}

function saveCart(){

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    renderCart();

}

function removeItem(index){

    cart.splice(index,1);

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    renderCart();

}