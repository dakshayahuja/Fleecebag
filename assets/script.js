$(document).ready(function () {
  $("#checkout").click(function () {
    Swal.fire({
      title: "Order Placed",
      text: "Your order has been placed successfully.",
      icon: "success",
      confirmButtonText: "Okay",
    });
  });
  
  $("#subscribe").click(function () {
    Swal.fire({
      title: "Thank You!",
      text: "You are now subscribed to our weekly newsletter.",
      icon: "success",
      confirmButtonText: "Yayy",
    });
  });

  if ($(".owl-1").length > 0) {
    $(".owl-1").owlCarousel({
      items: 1,
      loop: true,
      stagePadding: 0,
      mouseDrag: true,
      touchDrag: true,
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

$(document).ready(function () {});
