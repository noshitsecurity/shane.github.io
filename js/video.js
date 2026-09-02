$(window).load(function() {
$('#slider').flexslider({
slideshow: true,
animation: "fade",
animationLoop: true,
video: true,
/* reload video on navigation */
before: function(){ $('video').each( function() { $(this).get(0).load(); }); }
});
});

function pauseslider() { $('#slider').flexslider("pause"); }
function playslider() { $('#slider').flexslider("play"); }
function resumeslider() { $('#slider').flexslider("next"); $('#slider').flexslider("play"); }