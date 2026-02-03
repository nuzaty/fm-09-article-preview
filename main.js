/* register click event */

const shareBtns = document.querySelectorAll('.article__byline-share-btn');
let isOpen = false;

shareBtns.forEach(btn => {
    btn.addEventListener('click', e => {
        e.stopPropagation();
        isOpen ? closeShare() : openShare();
    });
});

/* open/close logic */

const article = document.querySelector('.article');
const popover = document.querySelector('.popover');

function openShare() {
    popover.classList.add('is-open');
    article.classList.add("is-share-active");
    document.addEventListener('pointerdown', onOutsidePointerDown);
    document.addEventListener('keydown', onKeyDown);
    isOpen = true;
}

function closeShare() {
    popover.classList.remove('is-open');
    article.classList.remove("is-share-active");
    document.removeEventListener('pointerdown', onOutsidePointerDown);
    document.removeEventListener('keydown', onKeyDown);
    isOpen = false;
}

const ignoreElements = [
    popover,
    ...shareBtns,
    document.querySelector('.share.share--inline')
];
function onOutsidePointerDown(e) {
    if (ignoreElements.some(el => el.contains(e.target))) {
        return;
    }

    closeShare();
}

function onKeyDown(e) {
    if (e.key === 'Escape') {
        closeShare();
    }
}

/* update share popover position */

const bylineShareBtn = document.querySelector('.article__byline .article__byline-share-btn');

function positionPopover() {
    const rect = bylineShareBtn.getBoundingClientRect();

    popover.style.setProperty(
        '--anchor-center-x',
        `${rect.left + rect.width / 2}px`
    );

    popover.style.setProperty(
        '--anchor-bottom',
        `${rect.bottom}px`
    );
}
positionPopover();
window.addEventListener('resize', positionPopover);
window.addEventListener('scroll', positionPopover, true);
