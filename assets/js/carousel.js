const $owl = $(".owl-one");
$owl.children().each(function (index) {
  $(this).attr("data-position", index); // NB: .attr() instead of .data()
});

$owl.owlCarousel({
  loop: true,
  responsiveClass: true,
  // nav: true,
  margin: 0,
  autoplayTimeout: 4000,
  infinite: true,
  // rtl: true,
  rewind: true,
  smartSpeed: 600,
  center: true,
  items: 2,
  margin: 130,
  autoHeight: true,
  animateOut: "slideOutUp",
  animateIn: "slideInUp",
  responsive: {
    0: {
      margin: 130,
    },
    450: {
      items: 2,
      margin: 90,
    },
    600: {
      items: 3,
      margin: 180,
    },
    1200: {
      items: 3,
      margin: 50,
    },
  },
});

$(document).on("click", ".owl-item>div", function () {
  // see https://owlcarousel2.github.io/OwlCarousel2/docs/api-events.html#to-owl-carousel
  const $speed = 600; // in ms
  $owl.trigger("to.owl.carousel", [$(this).data("position"), $speed]);
});

const $swone = $(".sw-sub-one");
const $swtwo = $(".sw-sub-two");
const $swthree = $(".sw-sub-three");

const swone = new Swiper(".sw-sub-one", {
  spaceBetween: 30,
  effect: "fade",
  loop: true,
  navigation: {
    nextEl: ".next-sub1",
    prevEl: ".prev-sub1",
  },
});
const swtwo = new Swiper(".sw-sub-two", {
  spaceBetween: 30,
  effect: "fade",
  loop: true,
  navigation: {
    nextEl: ".next-sub2",
    prevEl: ".prev-sub2",
  },
});
const swthree = new Swiper(".sw-sub-three", {
  spaceBetween: 30,
  effect: "fade",
  loop: true,
  navigation: {
    nextEl: ".next-sub3",
    prevEl: ".prev-sub3",
  },
});

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
