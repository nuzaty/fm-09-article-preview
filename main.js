
let shareBtns = document.querySelectorAll('.article__byline-share-btn');
let shareMobile = document.querySelector('.share.share--inline');
let articleByline = document.querySelector('.article__byline');

shareBtns.forEach(shareBtn => {
    shareBtn.addEventListener('click', () => {
        shareMobile.classList.toggle("is-hidden");
        articleByline.classList.toggle("is-hidden");
    });
});
