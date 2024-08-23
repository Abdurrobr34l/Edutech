// javascript
// About-Us Section Counter Start
const counters = document.querySelectorAll('.counter,#counter');
        counters.forEach(counter => {
            counter.innerText = '0';
            const updateCounter = () => {
                const target = +counter.getAttribute('data-target');
                const current = +counter.innerText;
                const increment = target / 200;
                if (current < target) {
                    counter.innerText = `${Math.ceil(current + increment)}`;
                    // can change time below
                    setTimeout(updateCounter, 90);
                } else {
                    counter.innerText = target;
                }
            };
            updateCounter();
        });

// 2 - IT IS USED TO GIVE GO TO TOP BUTTON
let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(#a4074d ${scrollValue}%, #f4f4f4 ${scrollValue}%)`;
};
window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

// 3- CLASS PRICING GALLERY
// GALLERY PRACTICE
function filterGallery(priceCategory) {
  let items = document.querySelectorAll('.item');
  let buttons = document.querySelectorAll('.filter-btn');
  
  // Remove active class from all buttons
  buttons.forEach(button => {
      button.classList.remove('active');
  });

  // Add active class to the clicked button
  document.querySelector(`.filter-btn[onclick="filterGallery('${priceCategory}')"]`).classList.add('active');

  // Filter items based on priceCategory
  items.forEach(item => {
      if (priceCategory === 'all') {
          item.style.display = 'block';
      } else if (item.getAttribute('data-price') === priceCategory) {
          item.style.display = 'block';
      } else {
          item.style.display = 'none';
      }
  });
}

// Initially load 'all' content and set the 'all' button as active
document.addEventListener('DOMContentLoaded', function() {
  filterGallery('all');
});





// jquery
$(document).ready(function () {
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

});



{/* <script>
  AOS.init();
</script> */}