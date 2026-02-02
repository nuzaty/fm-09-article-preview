
const shareBtns = document.querySelectorAll('.article__byline-share-btn');
const article = document.querySelector('.article');

shareBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        article.classList.toggle("is-share-open");
    });
});
