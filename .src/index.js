import fullpage from 'fullpage.js';
import fullpageKey from './fullpage_license';

if (oc.useTurbo && oc.useTurbo()) {
    addEventListener('page:before-render', async (event) => {
        // event.preventDefault();
        // event.detail.resume();
    })
    addEventListener('page:loaded', async () => {
        init()
    })
} else {
    addEventListener('DOMContentLoaded', async () => {
        init()
    })
}
function init(){
    burgerInit();
    fullpageInit()
}
function burgerInit(){
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {
            const target = el.dataset.target;
            const $target = document.getElementById(target);
            el.classList.toggle('is-active');
            $target.classList.toggle('is-active');
        });
    });
}
function fullpageInit(){
    new fullpage('#fullpage', {
        licenseKey: fullpageKey ?? ''
    });
}
