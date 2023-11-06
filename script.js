// Add the following JavaScript to your script.js file or within a <script> tag in your HTML.
document.addEventListener("DOMContentLoaded", function () {
  const galleryItems = document.querySelectorAll(".gallery-item");
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightbox-image");

  galleryItems.forEach((item, index) => {
    item.addEventListener("click", function () {
      lightboxImage.src = `grid/image${index + 1}.jpg`;
      lightbox.style.display = "block";
    });
  });

  function closeLightbox() {
    lightbox.style.display = "none";
  }

  window.closeLightbox = closeLightbox;
});
