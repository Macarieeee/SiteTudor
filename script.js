const scrollers = document.querySelectorAll('.scroller');

if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches){
    addAnimation();
}


//  owl carousel script
$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    navText: [],
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        1000: {
            items: 2
        }
    }
});

let activeDropdown = null;

function toggleDropdown(index) {
  const dropdowns = document.querySelectorAll('.dropdown-content');
  const icons = document.querySelectorAll('.dropdown-header .icon');

  if (activeDropdown === index) {
    dropdowns[index].classList.remove('active');
    icons[index].textContent = '+';
    activeDropdown = null;
  } else {
    dropdowns.forEach((content, i) => {
      content.classList.remove('active');
      icons[i].textContent = '+';
    });
    dropdowns[index].classList.add('active');
    icons[index].textContent = '−';
    activeDropdown = index;
  }
}