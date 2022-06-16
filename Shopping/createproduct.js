

const createProductdiv = (product)=>{

    const coldiv = document.createElement('div')
    const productdiv = document.createElement('div')
    const productimg = document.createElement('img')
    const bodydiv = document.createElement('div')
    const headerdiv = document.createElement('div')
    const cardtitle = document.createElement('h6')
    const productprice = document.createElement('h5')
    const ratingstar1 = document.createElement('span')
    const ratingstar2 = document.createElement('span')
    const ratingstar3 = document.createElement('span')
    const ratingstar4 = document.createElement('span')
    const ratingstar5 = document.createElement('span')
    const ratingcount = document.createElement('span')
    const productdesc = document.createElement('p')
    const cardbuttondiv = document.createElement('div')
    const addbutton = document.createElement('a')
    const buybutton = document.createElement('a')

    coldiv.classList = 'col-md-3 mt-3'
    productdiv.classList = 'card'
    productimg.classList = 'card-img-top'
    productimg.src = product.image
    bodydiv.classList = 'card-body'
    headerdiv.classList = 'product-header'
    cardtitle.classList = 'card-title'
    cardtitle.innerText = `${product.title.slice(0,20)}...`
    productprice.classList = 'card-title productprice'
    productprice.innerText = `$${product.price}`    
    ratingstar1.classList = 'fa fa-star checked'
    ratingstar2.classList = 'fa fa-star checked'
    ratingstar3.classList = 'fa fa-star checked'
    ratingstar4.classList = 'fa fa-star checked'
    ratingstar5.classList = 'fa fa-star checked'
    ratingcount.classList = 'rating-count'
    ratingcount.innerText = product.rating.count
    productdesc.classList = 'card-text description'
    productdesc.innerText = `${product.description.slice(0,45)}...`
    cardbuttondiv.classList = 'cardbutton'
    addbutton.classList = 'btn buttonstyle'
    addbutton.innerText = 'Add to cart'

    buybutton.classList = 'btn'
    buybutton.innerText = 'Buy now'
    coldiv.id = `product-${product.id}`
    

    parentdiv.appendChild(coldiv)
    coldiv.appendChild(productdiv)
    productdiv.appendChild(productimg)
    productdiv.appendChild(bodydiv)
    bodydiv.appendChild(headerdiv)
    headerdiv.appendChild(cardtitle)
    headerdiv.appendChild(productprice)
    bodydiv.appendChild(productdesc)
    bodydiv.appendChild(cardbuttondiv)
    cardbuttondiv.appendChild(addbutton)
    cardbuttondiv.appendChild(buybutton)

    const ratingstars = Math.ceil(product.rating.rate)

    ratingstars>=1 && bodydiv.appendChild(ratingstar1) 
    ratingstars>=2 && bodydiv.appendChild(ratingstar2)
    ratingstars>=3 && bodydiv.appendChild(ratingstar3) 
    ratingstars>=4 && bodydiv.appendChild(ratingstar4)
    ratingstars>=5 && bodydiv.appendChild(ratingstar5)
    
    bodydiv.appendChild(ratingcount)
    
    addbutton.addEventListener('click',function(){
      cartItems(`${coldiv.id}`)
      this.innerText = 'Added'
      this.classList.add('disabled')
    })

    
}


/*
            <div class="col-md-3 mt-3">

                <div class="card">
                    <img src="https://pyxis.nymag.com/v1/imgs/35b/b9b/c5c7fc576705d788e145dbdd500dca882c-workout.2x.rsquare.w600.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                      <div class="product-header">
                        <h5 class="card-title">Card title</h5>
                        <h4 class="card-title productprice">$500</h4>
                      </div>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star"></span>
                      <span class="fa fa-star"></span>
                      <h6>345</h6>
                      
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <div class="cardbutton">
                        <a href="#" class="btn btn-primary">Add to cart</a>
                        <a href="#" class="btn btn-primary">Buy now</a>
     
                      </div>

                    </div>
                  </div>
            </div>

*/