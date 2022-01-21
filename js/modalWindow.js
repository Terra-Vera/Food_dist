const modalTrigger = document.querySelectorAll('[data-modal]'),
    modal = document.querySelector('.modal'),
    modalCloseBtn = document.querySelector('.modal__close');

// modalTrigger.forEach(item => {
//     item.addEventListener('click', () => {
//         modal.slyle.display = 'block';
//         // modal.classList.remove('display');
//         console.log(modal);
//     });
// });

function closeModal() {
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
}

function openModal() {
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
    // clearInterval(modalTimerId);
}

modalTrigger.forEach((item) => {
    item.addEventListener('click', () => {
        openModal();
    });
});


modalCloseBtn.addEventListener('click', closeModal);


modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

document.addEventListener('keydown', (e) => {
    if(e.code === "Escape" && modal.classList.contains('show')) {
        closeModal();
    }
});

// let modalTimerId = setTimeout(openModal, 10000);

function swowModalByScroll() {
    if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight -10) {
        openModal();
        window.removeEventListener('scroll', swowModalByScroll);
    }
}

window.addEventListener('scroll', swowModalByScroll);



