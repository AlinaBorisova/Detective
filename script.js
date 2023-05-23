'use strict';
const showFeedBacks = () => {
    const btnFeedBack = document.querySelector('.show-more');
    const feedBack = document.querySelectorAll('.feedback-item');
    const footer = document.querySelector('.footer_container');

    btnFeedBack.addEventListener('click', () => {
        feedBack.forEach(item => {
            console.log(item)
            if(!item.classList.contains('feedback-item-visible')) {
                item.style.display = 'block';
                btnFeedBack.style.display = 'none';
            }
        });

        footer.style.cssText = `
            top: 0;
            margin-top: 0;
        `;
    });
};

showFeedBacks();

