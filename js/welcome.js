function scrollToTargetAdjusted(target) {
  const element = document.getElementById(target);
  const headerOffset = 70; // Adjust this offset as needed
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth"
  });
}

document.querySelectorAll('.menu-link').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    var target = this.getAttribute('href').substring(1);
    scrollToTargetAdjusted(target);
  });
});
 
$(document).ready(function() {
  // Hide all content by default
  //$(".content").hide();

  // Toggle content visibility when an expandable menu is clicked
  $(".expandable-menu").click(function() {
    
      // Find the content associated with the clicked menu and toggle it
      let idTarget = $(this).attr('data-idParent');
      $(".collapse").removeClass('expand');
      $('#'+idTarget).addClass('expand');

      // Optionally close other open menus
      //$(".content").not($(this).next(".content")).slideUp();
  });
});


$('.email-to-copy').on( "click tap",function() {
  var copyText = 'roberto.unsettled@gmail.com';
  navigator.clipboard.writeText(copyText);

  $('#email-comfirmation').addClass('visible');
  setTimeout(function() {
    $('#email-comfirmation').removeClass('visible');
   }, 2000);

});