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

$(function () {
  if ($(".owl-2").length > 0) {
    $(".owl-2").owlCarousel({
      // center: true,
      items: 1,
      loop: true,
      stagePadding: 0,
      margin: 20,
      smartSpeed: 1300,
      autoplay: true,
      pauseOnHover: false,
      responsive: {
        600: {
          margin: 20,
          nav: true,
          items: 2,
        },
        1000: {
          margin: 20,
          stagePadding: 0,
          items: 4,
        },
      },
    });
  }
});

$(document).ready(function () {
  $("#checkout").click(function () {
    Swal.fire({
      title: "Order Placed",
      text: "Your order has been placed successfully.",
      icon: "success",
      confirmButtonText: "Okay",
    });
  });

  //code for changing the prices by changing quantity
  // var taxRate = 0.05;
  // var fadeTime = 300;

  // $(".pass-quantity input").change(function () {
  //   updateQuantity(this);
  // });

  // $(".remove-item button").click(function () {
  //   removeItem(this);
  // });

  // function recalculateCart() {
  //   var subtotal = 0;

  //   $(".item").each(function () {
  //     subtotal += parseFloat($(this).children(".product-line-price").text());
  //   });

  //   var tax = subtotal * taxRate;
  //   var total = subtotal + tax;

  //   $(".totals-value").fadeOut(fadeTime, function () {
  //     $("#cart-subtotal").html(subtotal.toFixed(2));
  //     $("#cart-tax").html(tax.toFixed(2));
  //     $(".cart-total").html(total.toFixed(2));
  //     if (total == 0) {
  //       $(".checkout").fadeOut(fadeTime);
  //     } else {
  //       $(".checkout").fadeIn(fadeTime);
  //     }
  //     $(".totals-value").fadeIn(fadeTime);
  //   });
  // }

  // function updateQuantity(quantityInput) {
  //   var productRow = $(quantityInput).parent().parent();
  //   var price = parseFloat(productRow.children(".product-price").text());
  //   var quantity = $(quantityInput).val();
  //   var linePrice = price * quantity;

  //   productRow.children(".product-line-price").each(function () {
  //     $(this).fadeOut(fadeTime, function () {
  //       $(this).text(linePrice.toFixed(2));
  //       recalculateCart();
  //       $(this).fadeIn(fadeTime);
  //     });
  //   });
  // }

  // function removeItem(removeButton) {
  //   var productRow = $(removeButton).parent().parent();
  //   productRow.slideUp(fadeTime, function () {
  //     productRow.remove();
  //     recalculateCart();
  //   });
  // }
});

//function to format dates
function formatDate(date) {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
}

//setting the earliest shipping date
$start_date = new Date();
$numberOfDays = 5;
$start_date.setDate($start_date.getDate() + $numberOfDays);
$start_date = formatDate($start_date);
$short_start_date = new Date($start_date).toLocaleDateString("en-US");
document.getElementById("start-delivery-date").innerHTML = $short_start_date;

//setting the last shipping date
$end_date = new Date();
$numberOfDays = 7;
$end_date.setDate($end_date.getDate() + $numberOfDays);
$end_date = formatDate($end_date);
$short_end_date = new Date($end_date).toLocaleDateString("en-US");
document.getElementById("end-delivery-date").innerHTML = $short_end_date;
