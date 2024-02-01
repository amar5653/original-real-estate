'use strict';

/** navbar toggle in mobile */

const /*{nodeElement}*/  $navbar = document.querySelector("[data-navbar]");
const /**{nodeElement} */ $navToggler = document.querySelector("[data-nav-toggler");

$navToggler.addEventListener("click", () =>{
 Snavbar.classList.toggle("active");
});

/**Header scroll state */
const /**{nodeElemeny} */ $header = document.querySelector("[data-header]");

window.addEventListener("scroll", e => {
    $header.classList[window.scrollY > 50 ? "add" : "remove"]("active");

});

