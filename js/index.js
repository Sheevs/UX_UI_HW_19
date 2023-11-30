console.log("Your index.js file is loaded correctly!");
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
window.onscroll = function () {
    var backToTopButton = document.querySelector('.backToTop');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
};
document.addEventListener('DOMContentLoaded', function () {
    const downloadResumeBtn = document.getElementById('downloadResumeBtn');
    downloadResumeBtn.addEventListener('click', function () {
      alert('Resume Successfully Downloaded!');
    });
  });