import Error404 from '../views/pages/Error404.js';

export const routerHistory = [];

const Router = {
    // --------------------------------
    // Redirect and render page
    // --------------------------------
    goToPage : async (path, page) => {
        if (routerHistory[0] !== path) {
            const content = document.getElementById('page_container');
            const currentPage = page ? new page : new Error404;

            location.href=`/#${path}`;
            content.innerHTML = await currentPage.render();
            currentPage.afterRender();

            routerHistory.unshift(path);
            routerHistory.splice(10);
        }
    }

    // --------------------------------
    // Move forward in history
    // --------------------------------
    , historyForward : async () => {
        window.history.forward();
    }

    // --------------------------------
    // Move back in history
    // --------------------------------
    , historyBack : async () => {
        window.history.back();
    }
}

export default Router;