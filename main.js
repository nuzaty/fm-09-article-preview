
const shareBtns = document.querySelectorAll('.article__byline-share-btn');
const shareMobile = document.querySelector('.share.share--inline');
const articleByline = document.querySelector('.article__byline');

shareBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        shareMobile.classList.toggle("is-hidden");
        articleByline.classList.toggle("is-hidden");
    });
});
