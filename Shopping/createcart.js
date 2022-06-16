let cartitemss = document.getElementById("cartitemlength")

const cartitem = document.getElementById('carditemid')
let imgcart = document.getElementById('cartid')

const createitems = (item) =>{

const carddiv = document.createElement('div')
const cardrowdiv = document.createElement('div')
const cardcoldiv1 = document.createElement('div')
const cartimg = document.createElement('img')
const cardcoldiv2 = document.createElement('div')
const cardbodydiv = document.createElement('div')
const cardtitle = document.createElement('h5')
const carddis = document.createElement('p')
const removebutton = document.createElement('button')

carddiv.classList = 'card mb-3'
carddiv.style = 'max-width:540px'
cardrowdiv.classList = 'row no-gutters'
cardcoldiv1.classList = 'col-md-4'
cartimg.src = item.image
cartimg.classList = 'cartimgsize'
cardcoldiv2.classList = 'col-md-8'
cardbodydiv.classList = 'card-body'
cardtitle.classList = 'card-title'
cardtitle.innerText = `${item.title.slice(0,20)}...`
carddis.classList = 'card-text'
carddis.innerText = `${item.description.slice(0,45)}...`
removebutton.classList = 'bg-danger w-100 text-white cartitem'
removebutton.type = 'button'
removebutton.innerText = 'Remove item'

cartitem.appendChild(carddiv)
carddiv.appendChild(cardrowdiv)
cardrowdiv.appendChild(cardcoldiv1)
cardrowdiv.appendChild(cardcoldiv2)
cardcoldiv1.appendChild(cartimg)
cardcoldiv2.appendChild(cardbodydiv)
cardbodydiv.appendChild(cardtitle)
cardbodydiv.appendChild(carddis)
cardbodydiv.appendChild(removebutton)


removebutton.addEventListener('click',()=>{
   
    carddiv.parentNode.removeChild(carddiv);
    cart =  cart.filter((cartitemid)=> cartitemid != `product-${item.id}`)
    cartitemss.innerText = cart.length
 //   carddiv.style.display = 'none'
    
 if(cart.length == 0){

    refreshmodal.innerHTML = '<img class="addcartimg" id="cartid" src="Assets/cart.gif" >'
    
   }

   let productcoldiv =  document.getElementById(`product-${item.id}`).getElementsByClassName('buttonstyle')[0]
   
   productcoldiv.innerText = 'Add to cart'
   
   productcoldiv.classList.remove("disabled");

})

}

// <div class="card mb-3" style="max-width: 540px;">
//             <div class="row no-gutters">
//               <div class="col-md-4">
//                 <img src="" alt="cartimg">
//               </div>
//               <div class="col-md-8">
//                 <div class="card-body">
//                   <h5 class="card-title">Card title</h5>
//                   <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//                   <button type="button" class="bg-danger  w-100 text-white cartitem">Remove item</button>
//                 </div>
//               </div>
//             </div>
//           </div>