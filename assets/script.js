// // Instantiate the Bootstrap carousel
// $('.multi-item-carousel').carousel({
//     interval: false
//   });
  
//   // for every slide in carousel, copy the next slide's item in the slide.
//   // Do the same for the next, next item.
//   $('.multi-item-carousel .item').each(function(){
//     var next = $(this).next();
//     if (!next.length) {
//       next = $(this).siblings(':first');
//     }
//     next.children(':first-child').clone().appendTo($(this));
    
//     if (next.next().length>0) {
//       next.next().children(':first-child').clone().appendTo($(this));
//     } else {
//         $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
//     }
//   });


$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
          nav:true
      },
      600:{
          items:3,
          nav:false
      },
      1000:{
          items:5,
          nav:true,
          loop:false
      }
  }
})