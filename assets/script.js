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

$(function() {
	if ( $('.owl-2').length > 0 ) {
        $('.owl-2').owlCarousel({
            // center: true,
            items: 1,
            loop: true,
            stagePadding: 0,
            margin: 20,
            smartSpeed: 1300,
            autoplay: true,
            pauseOnHover: false,
            responsive:{
                600:{
                  margin: 20,
                  nav: true,
                  items: 2
                },
                1000:{
                  margin: 20,
                  stagePadding: 0,
                  items: 4
                }
            }
        });            
    }

})