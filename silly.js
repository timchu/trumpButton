$(document).ready( function () {
  $("#butt").css('cursor','pointer');
  $(document).on('click touchstart', "#butt",  function(event) {
      alert("This click worked on iOS!");
});
} 
