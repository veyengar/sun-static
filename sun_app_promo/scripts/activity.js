$(document).ready(function(){

  // https://stackoverflow.com/questions/38360676/get-the-element-which-is-the-most-visible-on-the-screen
  function getMostVisible( $elements ) {
      var $element = $(),
          viewportHeight = $( window ).height(),
          max = 0;
      $elements.each( function() {
          var visiblePx = getVisibleHeightPx( $( this ), viewportHeight );
          if ( visiblePx > max ) {
              max = visiblePx;
              $element = $( this );
          }
      } );
      return $element;
  }

  // https://stackoverflow.com/questions/38360676/get-the-element-which-is-the-most-visible-on-the-screen
  function getVisibleHeightPx( $element, viewportHeight ) {
      var rect = $element.get( 0 ).getBoundingClientRect(),
          height = rect.bottom - rect.top,
          visible = {
              top: rect.top >= 0 && rect.top < viewportHeight,
              bottom: rect.bottom > 0 && rect.bottom < viewportHeight
          },
          visiblePx = 0;
      if ( visible.top && visible.bottom ) {
          // Whole element is visible
          visiblePx = height;
      } else if ( visible.top ) {
          visiblePx = viewportHeight - rect.top;
      } else if ( visible.bottom ) {
          visiblePx = rect.bottom;
      } else if ( height > viewportHeight && rect.top < 0 ) {
          var absTop = Math.abs( rect.top );
          if ( absTop < height ) {
              // Part of the element is visible
              visiblePx = height - absTop;
          }
      }
      return visiblePx;
  }

  $(window).scroll(function(){
    $(getMostVisible($('.section-container'))).css('background-color', 'green');
  });


});
