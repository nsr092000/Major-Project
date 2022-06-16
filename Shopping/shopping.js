let refreshmodal = document.getElementById('carditemid')

let globalprd = []
const parentdiv = document.getElementById('products')

const productloader = document.getElementById('loader')


let fetchproducts = async()=>{

    const res = await fetch('https://fakestoreapi.com/products')
    const data = await res.json()
    globalprd = data
    productloader.style.display = 'none'
 //   console.log(data)
    data.forEach(product => createProductdiv(product))
}

const showcartitems = () =>{

    if(cart.length == 0){
        refreshmodal.innerHTML = '<img class="addcartimg" id="cartid" src="Assets/cart.gif" >'
    }


let cartproducts = globalprd.filter((product)=>cart.includes(`product-${product.id}`))

cartproducts.forEach((items)=>createitems(items))

}

const continuetobuy = () =>{
    
    refreshmodal.innerHTML = ''
}


// const fetchproducts = () =>{

//     fetch('')
//     .then(res=>res.json())
//     .then((data)=>console.log(data))
//     .catch(error=>{
//         console.log(error)
//     })
// }


    


