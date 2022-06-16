
let cartitems = document.getElementById("cartitemlength")
let cart = []

const cartItems = (id)=>{
 //   console.log(id)
    cart.push(id)
 //   console.log(cart)
    cartitems.innerText = cart.length
}

