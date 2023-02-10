const menuBtn = document.querySelector('.menu-toggle');
// const menuBtnx = document.querySelector('.menu-togglex');
const navac = document.querySelector('.navlinks-maindiv');
let menuOpen = false;


menuBtn.addEventListener('click', () =>{
  if (!menuOpen){
    menuBtn.classList.add('active');
    navac.classList.add('navactive');
    menuOpen = true;
  }
  else{
    menuBtn.classList.remove('active');
    navac.classList.remove('navactive');
    menuOpen = false;
  }
});
// =========================================================================================


// const cal1 = document.querySelector('.cal1');
// const cal2 = document.querySelector('.cal2');
// const cal3 = document.querySelector('.cal3');
// let menOpen = false;





// menuBtnx.addEventListener('click', () =>{
//   if (!menuOpen){
//     menuBtnx.classList.add('active');
//     navac.classList.add('navactive');
//     menuOpen = true;
//   }
//   else{
//     menuBtnx.classList.remove('active');
//     navac.classList.remove('navactive');
//     menuOpen = false;
//   }
// });



// cal1.addEventListener('click', () =>{
//   if (!menOpen){
//     cal1.classList.add('active');
//     cal2.classList.remove('active');
//     cal3.classList.remove('active');
//     menuOpen = true;
//   }
//   else{
//     cal1.classList.remove('active');
//     cal2.classList.remove('active');
//     cal3.classList.remove('active');
//     menuOpen = false;
//   }
// });
// cal2.addEventListener('click', () =>{
//   if (!menOpen){
//     cal2.classList.add('active');
//     cal3.classList.remove('active');
//     cal1.classList.remove('active');
//     menuOpen = true;
//   }
//   else{
//     cal1.classList.remove('active');
//     cal2.classList.remove('active');
//     cal3.classList.remove('active');
//     menuOpen = false;
//   }
// });
// cal3.addEventListener('click', () =>{
//   if (!menOpen){
//     cal3.classList.add('active');
//     cal1.classList.remove('active');
//     cal2.classList.remove('active');
//     menuOpen = true;
//   }
//   else{
//     cal1.classList.remove('active');
//     cal2.classList.remove('active');
//     cal3.classList.remove('active');
//     menuOpen = false;
//   }
// });


// $(document).ready(function(){
   
// $('.main-icon-div').slick({
//   slidesToShow: 5,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 2000,
//   arrows: false,
//   centerMode: true,
  
//   responsive: [{
   
//     breakpoint: 990,
//     settings: {
//       slidesToShow: 3,
//     },
//     breakpoint: 790,
//     settings: {
//       slidesToShow: 2,
//     },

   
   
//   }]

// });
// });





// function increaseValue() {
//     var value = parseInt(document.getElementById('number').value, 10);
//     value = isNaN(value) ? 0 : value;
//     value++;
//     document.getElementById('number').value = value;
//   }
  
//   function decreaseValue() {
//     var value = parseInt(document.getElementById('number').value, 10);
//     value = isNaN(value) ? 0 : value;
//     value < 1 ? value = 1 : '';
//     value--;
//     document.getElementById('number').value = value;
//   }
// const cards = document.querySelector('.card-grid');

// const cal1 = document.querySelector('.cr1');
// const cal2 = document.querySelector('.cr2');
// const cal3 = document.querySelector('.cr3');
// let menOpen = false;



// cal1.addEventListener('click', () =>{
//   if (!menOpen){
//     cards.classList.remove('cr3');
//     cards.classList.add('cr1');
    
//     menuOpen = true;
//   }
//   else{
      
//     cards.classList.remove('cr1');
//     menuOpen = false;
//   }
// });
// cal2.addEventListener('click', () =>{
//     if (!menOpen){
//         cards.classList.remove('cr1');
//       cards.classList.remove('cr3');
      
//       menuOpen = true;
//     }
//     else{
//       cards.classList.remove('cr3');
//       menuOpen = false;
//     }
//   });
// cal3.addEventListener('click', () =>{
//     if (!menOpen){
//         cards.classList.remove('cr1');
//       cards.classList.add('cr3');
      
//       menuOpen = true;
//     }
//     else{
//         cards.classList.remove('cr1');
//       cards.classList.remove('cr3');
//       menuOpen1 = false;
//     }
//   });

// console.log('got it')


// const togglecard = document.querySelector('.swiper-slide');

// const card1 = document.querySelector('.ms1');
// const card2 = document.querySelector('.ms2');
// const card3 = document.querySelector('.ms3');


// card1.addEventListener('click', () =>{
//     if (!menuOpen1){
        
//         togglecard.classList.add('-active');
      
//       menuOpen1 = true;
//     }
//     else{
//         togglecard.classList.remove('-active');
//       menuOpen1 = false;
//     }
//   });

//   card2.addEventListener('click', () =>{
//     if (!menuOpen1){
        
//         togglecard.classList.add('-active');
      
//       menuOpen1 = true;
//     }
//     else{
//         togglecard.classList.remove('-active');
//       menuOpen1 = false;
//     }
//   });









// <script>
// //Get the button
// var mybutton = document.getElementById("myBtn");

// // When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }

// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// }
// </script>
