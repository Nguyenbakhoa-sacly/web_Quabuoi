const btn_add_cart= document.querySelectorAll('.add_cart')

// console.log(btn_add_cart)

btn_add_cart.forEach((btn,index) => {

    
    btn.addEventListener('click',(e)=>{
        
        const btnItem = e.target
        const product = btnItem.parentElement.parentElement.parentElement;
        const productImg = product.querySelector('img').src
        const productTitle = product.querySelector('img').title

        const productName = product.querySelector('.container__select-box-list-item-describe').innerText;
        const productprepare = product.querySelector('.container__select-box-list-item-prepare').innerText;
        
        addCart( productImg, productName, productprepare, productTitle )

    })
    
})

function addCart( productImg, productName, productPrepare, productTitle ) {

    //thong bao trung san pham
    const cartItems = document.querySelectorAll('.header__cart-list-item')
    for(let x = 0; x < cartItems.length; x++) {
        const name = document.querySelectorAll('.header__cart-list-item-text-details');
        if(name[x].innerHTML == productName) {
            alert('Sản phẩm đã được thêm vào giỏ hàng!')
            return
        }
    }
    //them san pham
    const divCart = document.createElement('div');
    divCart.classList.add('header__cart-list-item');
    const scrollBar_cart = document.querySelector('.scroll_bar')
    scrollBar_cart.append(divCart)
    divCart.innerHTML = '<a href="#" class="header__cart-list-item-img"><img  src="'+productImg +'" title="'+productTitle+'"></a><div class="header__cart-list-item-text"><p class="header__cart-list-item-text-details hover">'+ productName+'</p><div class="flex"><span class="header__cart-list-item-text-price">'+productPrepare+'</span><span class="header__cart-list-item-text-unit"><u>đ</u></span></div><div class ="header__cart-list-select"><input class="header__cart-list-select-input" type="number" value="1" min="1"></div></div><div class="header__cart-list-item-iconremove"> <i class=" deleteProduct fa-regular fa-trash-can "></i></div>'
    cartTotals()
    deleteCart()
    
}

function deleteCart(){
    const cartItems = document.querySelectorAll('.header__cart-list-item')
    for(let x = 0; x < cartItems.length; x++) {
        const deleteProduct = cartItems[x].querySelector('.deleteProduct')
        deleteProduct.addEventListener('click',(e)=>{
            e.target.parentElement.parentElement.remove();
            cartTotals()
        })
    }
    
}


function cartTotals() {

    const cartItems = document.querySelectorAll('.header__cart-list-item')
    let productResult = 0
    for(var i=0; i<cartItems.length; i++) {
        
        const cartInput  = cartItems[i].querySelector('input').value;
        const productPrice = cartItems[i].querySelector('.header__cart-list-item-text-price').innerHTML;

        //tinh tong tien
        priceItem = cartInput*productPrice*1000;
        productResult = productResult + priceItem;

        //in ra tong so hang da dk them vao gio
        const totalProduct = document.querySelector('.totalProduct')
        totalProduct.innerHTML = cartItems.length
    }

    const totalResult = document.querySelector('.header__cart-list-prepare-right')
    totalResult.innerHTML = productResult.toLocaleString('de-DE')
    inputChanged()
}

function inputChanged(){

    const cartItems = document.querySelectorAll('.header__cart-list-item')
    for(var i=0; i<cartItems.length; i++) {

        const inputValue  = cartItems[i].querySelector('.header__cart-list-select-input')
        
        inputValue.addEventListener('change',(e)=>{
            cartTotals()
        })
    }
}