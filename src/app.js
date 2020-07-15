"use strict";

import Header from './views/components/Header.js';
import Footer from './views/components/Footer.js';

import Router from './routing/Router.js';
import routes from './routing/Routes.js';

//Parse a url and call router
const loadPage = async () => {
    const path = location.hash.slice(1).toLowerCase() || '/';

    await Router.goToPage(path, routes[path]);
    await renderComponents();
}

//Render header and footer
const renderComponents = async () => {
    const header = document.getElementById('header_container');
    const footer = document.getElementById('footer_container');

    header.innerHTML = await Header.render();
    footer.innerHTML = await Footer.render();
    Footer.afterRender();
}

// Listen on hash change:
window.addEventListener('hashchange', loadPage);

// Listen on page load:
window.addEventListener('load', loadPage);
