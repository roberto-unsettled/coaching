function toggleMenu(){
  let menuContent = document.getElementById('menu');
  let menuCall = document.getElementById('menu-call');
      menuContent.classList.toggle('active');
      menuCall.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', function() {
  let menuCall = document.getElementById('menu-call');
  //var menuContent = document.getElementById('menu');

  menuCall.addEventListener('click', function() {
      // menuContent.classList.toggle('active');
      menuCall.classList.toggle('active');
      toggleMenu();
  });

  // Smooth scrolling function
  function scrollToTargetAdjusted(target) {
    //console.log(target);
    let element = document.getElementById(target);
    let headerOffset = 80;
    let elementPosition = element.offsetTop;
    let offsetPosition = elementPosition - headerOffset;
console.log(target);
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
    // Detect when scrolling has finished
    window.addEventListener('scroll', function() {
      if (!toggleMenu || typeof toggleMenu !== 'function') return;
      var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
      var targetPosition = elementPosition - headerOffset;
      if (currentScroll === targetPosition) {
        console.log('end');
        toggleMenu();
      }
  });
    
  }

  // Smooth scroll when clicking navigation links
  document.querySelectorAll('.menu-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      var target = this.getAttribute('href').substring(1);
      scrollToTargetAdjusted(target);
    });
  });


});