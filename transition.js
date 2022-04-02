$(document).on("ready", function () {
  var width = 100,
    perfData = performance.getEntriesByType("navigation")[0],
    EstimatedTime = perfData["responseEnd"] - perfData["requestStart"],
    time = ((EstimatedTime / 1000) % 50) * 100;

  time = ((EstimatedTime / 1000) % 50) * 100;

  setTimeout(function () {
    $(".cd-transition-layer")
      .addClass("closing")
      .delay(1500)
      .queue(function () {
        $(this).removeClass("visible closing opening").dequeue();
      });
  }, time);

  $(document).on("click", "a:not(.lightbox)", function () {
    var newUrl = $(this).attr("href");
    if (!newUrl || newUrl[0] === "#") {
      location.hash = newUrl;
      return;
    }
    $(".loader").fadeIn(function () {
      location = newUrl;
    });
    return false;
  });

  var paget = $(".page-title .title").text();

  $(".page-title").append("<span></span>");
  $(".page-title span").append(paget);
});

$(window).on("load", function () {
  $(".loader").fadeOut(1000);
});
