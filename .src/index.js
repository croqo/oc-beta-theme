import fullpage from 'fullpage.js';
import fullpageKey from './fullpage_license';

if (oc.useTurbo && oc.useTurbo()) {
    addEventListener('page:before-render', async (event) => {
        // event.preventDefault();
        // event.detail.resume();

    })
    addEventListener('page:loaded', async () => {
        // console.log('EVENT: page:loaded');
        init();
    })
} else {
    addEventListener('DOMContentLoaded', async () => {
        console.log('DOMContentLoaded, turbo feature not used')
    })
}

function init(){
    burgerInit();
    fullpageInit()
}
function burgerInit(){
    const $menu = document.querySelector('#menu');
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {
            el.classList.toggle('is-active');
            $menu.classList.toggle('is-active');
        });
    });
}
function fullpageInit(){
    new fullpage('#fullpage', {
        licenseKey: fullpageKey ?? '',
        autoScrolling: true,
        scrollBar: false,

        sectionSelector: '.section',
        slideSelector: '.slide',
        fixedElements: '.is-fixed-top, .is-fixed-bottom',
        recordHistory: false
    });
}
