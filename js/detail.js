const btn_detail_product= document.querySelectorAll('.detail_product')

console.log(btn_detail_product)

btn_detail_product.forEach((btn,index) => {

    btn.addEventListener('click',(e)=>{
        
        const btnItem = e.target
        const product = btnItem.parentElement.parentElement.parentElement;
        const productImg = product.querySelector('img').src
        const productTitle = product.querySelector('img').title

        const productName = product.querySelector('.container__select-box-list-item-describe').innerText;
        const productprepare = product.querySelector('.container__select-box-list-item-prepare').innerText;
        
        detailCart( productImg, productName, productprepare, productTitle )

    })
    
})

function detailCart( productImg, productName, productprepare, productTitle){
    
}