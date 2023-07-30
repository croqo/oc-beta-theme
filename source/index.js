import fullpage from 'fullpage.js';
import fullpageLicenseKey from './license.js';


const sections = new fullpage('#fullpage', {
    navigation: true,
    licenseKey: fullpageLicenseKey,
    sectionsColor:['#ff5f45', '#0798ec', '#fc6c7c', 'grey']
});


document.addEventListener('DOMContentLoaded', () => {
// document.addEventListener('page:loaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
});
