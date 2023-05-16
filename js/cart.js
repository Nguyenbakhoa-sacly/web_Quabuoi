const btn_add_cart= document.querySelectorAll('.add_cart')

// console.log(btn_add_cart)

btn_add_cart.forEach((btn,index) => {

    // console.log(btn,index)
    btn.addEventListener('click',(e)=>{
        
        const btnItem = e.target
        const product = btnItem.parentElement.parentElement.parentElement;
        const productImg = product.querySelector('img').src
        const productTitle = product.querySelector('img').title

        const productName = product.querySelector('.container__select-box-list-item-describe').innerText;
        const productprepare = product.querySelector('.container__select-box-list-item-prepare').innerText;
        console.log(productprepare);
        addCart( productImg, productName, productprepare, productTitle )
    })
})

function addCart( productImg, productName, productPrepare, productTitle ) {

    const divCart = document.createElement('div');
    divCart.classList.add('header__cart-list-item');
    // const price = productName;
    const scrollBar_cart = document.querySelector('.scroll_bar')
    scrollBar_cart.append(divCart)
    divCart.innerHTML = '<a href="#" class="header__cart-list-item-img"><img  src="'+productImg +'" title="'+productTitle+'"></a><div class="header__cart-list-item-text"><p class="header__cart-list-item-text-details hover">'+ productName+'</p><div class="flex"><span class="header__cart-list-item-text-price">'+productPrepare+'</span><span class="header__cart-list-item-text-unit"><u>đ</u></span></div><div class ="header__cart-list-select"><button class="header__cart-btn-reduce hover">–</button><input class="header__cart-list-select-input" type="text"><button class="header__cart-btn-increase hover">+</button></div></div><div class="header__cart-list-item-iconremove"> <i class="fa-regular fa-trash-can "></i></div>'
        
}
