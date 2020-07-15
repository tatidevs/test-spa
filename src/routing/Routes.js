import Menu from '../views/pages/Menu.js';
import About from '../views/pages/About.js';
import ItemsPage from '../views/pages/Items.js';

// Supported routes
export const routes = {
    '/'             : Menu
    , '/menu'       : Menu
    , '/about'      : About
    , '/items'      : ItemsPage
};

export default routes;