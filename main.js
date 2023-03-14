//header menu sticky
// khi nguoi dung quan trang thi thuc thi cau lenh
window.onscroll = function() {
    myFunction()
};
//lay ra id
var header = document.getElementById('my_header');
// nhaan vi tri den cua thanh dieu huong
var sticky = header.offsetTop;

function myFunction(){
    if(window.pageYOffset > sticky){
        //them lop dinh vao tieu de khi ban cuon
        header.classList.add('sticky');
    }
    else{
        //xoa lop dinh khi ban roi khoi vi tri cuon
        header.classList.remove('sticky');
    }

}

//slide
window.addEventListener('load', function(){
    const slider = document.querySelector('.slider');
    const btn_slider_right = document.querySelector('.btn-slider-right');
    const btn_slider_left = document.querySelector('.btn-slider-left');
    const slider_item_imgs = document.querySelectorAll('.slider-item-img');
    const slider_item_width = slider_item_imgs[0].offsetWidth;
    const slidersLength = slider_item_imgs.length;
    let positionX = 0;
    let index = 0;
    btn_slider_right.addEventListener('click', () =>{
        handleSlider(1);
    });
    btn_slider_left.addEventListener('click', () =>{
        handleSlider(-1);

    });


    function handleSlider(direction){
        if(direction === 1){
            if(index >= slidersLength -1){
                index = slidersLength -1;
                return;
            }
            positionX = positionX - slider_item_width;
            slider.style = `transform : translateX(${positionX}px)`
            index++;
        }
        else if(direction === -1){
            if(index <= 0){
                index = 0;
                return;
            }
            positionX = positionX + slider_item_width;
            slider.style = `transform : translateX(${positionX}px)`
            index--;

        }
    }

});



// 

window.addEventListener('load', function(){
    const btn_transfer_left = document.querySelector('.btn-transfer-left');
    const btn_transfer_right = document.querySelector('.btn-transfer-right');
    const product_select_box = document.querySelector('.product-select-box-lv1');
    const product_select_lv1 = document.querySelectorAll('.product-select_lv1');
    const slider_item_width_lv1 = product_select_lv1[0].offsetWidth + 24;
    const slidersLength1 = product_select_lv1.length;
// console.log(slider_item_width_lv1)
  
    let positionX = 0;
    let index = 0;
    // let px = 24;
    // console.log(slidersLength1)
    // const width_img= slider_item_width + px;
   
    btn_transfer_right.addEventListener('click', () =>{
        handleProductslv1(1);
       
    });
    btn_transfer_left.addEventListener('click', () =>{
        handleProductslv1(-1);
       
    });

    function handleProductslv1(e){
        if(e === 1){
            if(index >= slidersLength1 - 4){
                // index = slidersLength1 - 1;
                return;
            }
            positionX = positionX - slider_item_width_lv1 ;
            product_select_box.style = `transform : translateX(${positionX}px)`
            index++;

        }else if(e === -1){
            if(index <= 0){
                index = 0;
                return;
            }
            positionX = positionX + slider_item_width_lv1;
            product_select_box.style = `transform : translateX(${positionX}px)`
            index--;
        }
    }

    
});





const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
//tab1 chuyen trang
const tabs= $$('.container__select-title-list-item');
const item_panes= $$('.tab_pane');

tabs.forEach((tab,index) =>{
    const pane = item_panes[index];

    tab.onclick =function(){
        // click vao menu
        console.log(item_panes)
        $('.container__select-title-list-item.active').classList.remove('active');
        $('.tab_pane.active').classList.remove('active');

        //hien thi noi dung item box
        this.classList.add('active');
        pane.classList.add('active');
    }
})

//tab2 chuyen trang
const tabs1= $$('.container__select-title-list-item1');
const item_panes1= $$('.tab_pane1');

tabs1.forEach((tab1,index1) =>{
    const pane1 = item_panes1[index1];

    tab1.onclick =function(){
        // click vao menu
        $('.container__select-title-list-item1.active1').classList.remove('active1');
        $('.tab_pane1.active1').classList.remove('active1');
        
        //hien thi noi dung item box
        this.classList.add('active1');
        pane1.classList.add('active1');
    }
})
//tab3 chuyen trang
const tabs2= $$('.container__select-title-list-item2');
const item_panes2= $$('.tab_pane2');

tabs2.forEach((tab2,index2) =>{
    const pane2 = item_panes2[index2];

    tab2.onclick =function(){
        // click vao menu
        $('.container__select-title-list-item2.active2').classList.remove('active2');
        $('.tab_pane2.active2').classList.remove('active2');
        
        //hien thi noi dung item box
        this.classList.add('active2');
        pane2.classList.add('active2');
    }
})


const menu__left_item= $$('.menu__left-item');
const tab_page = $$('.tab_page');

menu__left_item.forEach((tab, index) => {
    const page = tab_page[index];
    

    tab.onclick = function() {
        $('.menu__left-item.next_page').classList.remove('next_page');
        $('.tab_page.next_page').classList.remove('next_page');

        this.classList.add('next_page');
        page.classList.add('next_page');
        
    }
})


// menu doc trang san pham

// const icon_menu= $$('#nav__category-menu-item-icondow');
// const nav__category_menu_homepage_ul_lv2= $$('.nav__category-menu-homepage_ul_lv2');

// icon_menu.forEach((tab, index) =>{
//    const tab_menu = nav__category_menu_homepage_ul_lv2[index];

//    tab.onclick= function(){

//     tab_menu.classList.add('action')
//     $('.nav__category-menu-homepage_ul_lv2.action').classList.remove('action');
    
//    }
   
// })




//cuon trang len vi tri dau

const scrollTopButton=document.querySelector('#scroll_top-button');
const onScroll = (e) => {
    const scrollPosition = e.target.scrollingElement.scrollTop;
    scrollTopButton.classList.toggle('visible', scrollPosition > 0);

};
const scrollToTop = () => {
    window.scrollTo({
        top: 0, behavior:'smooth' 
    });
};
document.addEventListener('scroll', onScroll);



