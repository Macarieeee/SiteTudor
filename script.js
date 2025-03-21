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

// let activeDropdown = null;



// function toggleDropdown(index) {

//   const dropdowns = document.querySelectorAll('.dropdown-content');
//   const icons = document.querySelectorAll('.dropdown-header .icon');

//   if (activeDropdown === index) {
//     dropdowns[index].classList.remove('active');
//     icons[index].textContent = '+';
//     activeDropdown = null;
//   } else {
//     dropdowns.forEach((content, i) => {
//       content.classList.remove('active');
//       icons[i].textContent = '+';
//     });
//     dropdowns[index].classList.add('active');
//     icons[index].textContent = '−';
//     activeDropdown = index;
//   }
// }

document.addEventListener("DOMContentLoaded", function () {
  let activeDropdown = null;

  function toggleDropdown(index) {
      console.log("Toggling dropdown:", index); // Debugging
      
      const dropdowns = document.querySelectorAll(".dropdown-content");
      const icons = document.querySelectorAll(".dropdown-header .icon");

      if (!dropdowns[index] || !icons[index]) {
          console.error("Eroare: Elementul dropdown sau icon-ul nu există pentru indexul:", index);
          return;
      }

      if (activeDropdown === index) {
          dropdowns[index].classList.remove("active");
          icons[index].textContent = "+";
          activeDropdown = null;
      } else {
          dropdowns.forEach((content, i) => {
              content.classList.remove("active");
              icons[i].textContent = "+";
          });

          dropdowns[index].classList.add("active");
          icons[index].textContent = "−";
          activeDropdown = index;
      }
  }

  // Adaugă event listener dinamic (dacă onclick din HTML nu merge)
  const headers = document.querySelectorAll(".dropdown-header");
  headers.forEach((header, index) => {
      header.addEventListener("click", () => toggleDropdown(index));
  });
});


window.addEventListener("scroll", function () {
  var navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) { // Dacă se face scroll peste 50px
      navbar.classList.add("scrolled");
  } else {
      navbar.classList.remove("scrolled");
  }
});