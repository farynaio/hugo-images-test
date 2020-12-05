window.onload = () => {
  var images = document.querySelectorAll('.lazy');

  images.forEach(element => {
    var largeImage = new Image();
    largeImage.src = element.getAttribute('data-src');
    largeImage.sizes =element.hasAttribute("data-sizes") ? element.getAttribute("data-sizes") : "";

    largeImage.srcset = element.hasAttribute("data-srcset") ? element.getAttribute("data-srcset") : ""; 
    largeImage.className = element.getAttribute("class"); 
    largeImage.title = element.getAttribute("title"); 
    largeImage.alt = element.getAttribute("alt"); 
    // largeImage.classList.add('lozad')

    largeImage.onload = function () {
      largeImage.classList.add('loaded');
      element.replaceWith(largeImage);
    }
  })
};