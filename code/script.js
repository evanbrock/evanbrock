/* SCROLL TO TOP */

$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });

  /* PREV AND NEXT WITH ARROW KEYS */

  // when the document is ready, run this function
jQuery(function( $ ) {
    var keymap = {};

    // LEFT
    keymap[ 37 ] = "#prev";
    // RIGHT
    keymap[ 39 ] = "#next";

    $( document ).on( "keyup", function(event) {
        var href,
            selector = keymap[ event.which ];
        // if the key pressed was in our map, check for the href
        if ( selector ) {
            href = $( selector ).attr( "href" );
            if ( href ) {
                // navigate where the link points
                window.location = href;
            }
        }
    });
});

/* HERO HOVER STATE */



document.addEventListener("mousemove", function(event) {

  const x = event.pageX
  const y = event.pageY

  const target = document.querySelector(".hero")
  const targetCoords = target.getBoundingClientRect()

  const targetX = targetCoords.left + (target.offsetWidth / 2)
  const targetY = targetCoords.top + (target.offsetHeight / 2)

  const angleX = (targetY - y) / 25
  const angleY = (targetX - x) / 25

  target.style.transform = "rotateX(" + angleX + "deg) rotateY(" + angleY + "deg)"

})
