let searchBtn=document.querySelector('#searchbutton')
let searchBar=document.querySelector('.searchbox-container')
let menu=document.querySelector('#menu-bar')
let navbar=document.querySelector('.navbar')
window.onscroll=()=>{
    searchBtn.classList.remove('fa-times')
    searchBar.classList.remove('active')
    menu.classList.remove('fa-times')
    navbar.classList.remove('active')
}
menu.addEventListener('click',()=>{
    menu.classList.toggle('fa-times')
    navbar.classList.toggle('active')
})
searchBtn.addEventListener('click',()=>{
    searchBtn.classList.toggle('fa-times')
    searchBar.classList.toggle('active')
})
var testim = document.getElementById("testim"),
    testimDots = Array.prototype.slice.call(document.getElementById("testim-dots").children),
    testimContent = Array.prototype.slice.call(document.getElementById("testim-content").children),
    testimleftArrow = document.getElementById("left-arrow"),
    testimRightArrow = document.getElementById("right-arrow"),
    testimSpeed = 4500,
    currentSlide = 0,
    currentActive = 0,
    testimTimer ;
// coding with nick
window.onload = function () {

    // Testim Script
    function playSlide(slide) {
        for (var k = 0; k < testimDots.length; k++) {
            testimContent[k].classList.remove("active");
            testimContent[k].classList.remove("inactive");
            testimDots[k].classList.remove("active");
        }
        if (slide < 0) {
            slide = currentSlide = testimContent.length - 1;
        }
        if (slide > testimContent.length - 1) {
            slide = currentSlide = 0;
        }
        if (currentActive != currentSlide) {
            testimContent[currentActive].classList.add("inactive");
        }
        testimContent[slide].classList.add("active");
        testimDots[slide].classList.add("active");

        currentActive = currentSlide;

        clearTimeout(testimTimer);
        testimTimer = setTimeout(function () {
            playSlide(currentSlide += 1);
        }, testimSpeed)
    }
// coding with nick
    testimleftArrow.addEventListener("click", function () {
        playSlide(currentSlide -= 1);
    })
    testimRightArrow.addEventListener("click", function () {
        playSlide(currentSlide += 1);
    })

    for (var l = 0; l < testimDots.length; l++) {
        testimDots[l].addEventListener("click", function () {
            playSlide(currentSlide = testimDots.indexOf(this));
        })
    }
    playSlide(currentSlide);

}
//search bar
const search_submit=document.getElementById('submit');
const search_input=document.getElementById('searchbox');
search_submit.addEventListener('click',()=>{
    const value=search_input.target.value;
    console.log(value);

});
// whatsapp code 
var url = 'https://wati-integration-service.clare.ai/ShopifyWidget/shopifyWidget.js?41293';
var s = document.createElement('script');
s.type = 'text/javascript';
s.async =true;
s.src = url;
var options = {
"enabled":true,
"chatButtonSetting":{
  "backgroundColor":"#4dc247",
  "ctaText":"Message US!",
  "borderRadius":"25",
  "marginLeft":"0",
  "marginBottom":"50",
  "marginRight":"50",
  "position":"right"
},
"brandSetting":{
  "brandName":"Vijay Cattle Feeds",
  "brandSubTitle":"Feed your cattle the best",
  "brandImg":"#",
  "welcomeText":"Hi there!\nHow can I help you?",
  "messageText":"",
  "backgroundColor":"#0a5f54",
  "ctaText":"Start Chat",
  "borderRadius":"0px",
  "autoShow":false,
  "phoneNumber":"916281632625"
}
};
s.onload = function() {
    CreateWhatsappChatWidget(options);
};
var x = document.getElementsByTagName('script')[0];
x.parentNode.insertBefore(s, x);