let Header = {
    render: async () => {
        return `
             <nav class="navbar" role="navigation" aria-label="main navigation">
                <div class="container">
                    <div id="navbarBasicExample" class="navbar-menu is-active" aria-expanded="false">
                        <h1 class="navbar-item"> <b>Test project</b> </h1>
                        <div class="navbar-start">
                            <a class="navbar-item" href="/#/menu">
                                Menu
                            </a>
                            <a class="navbar-item" href="/#/items">
                                Items
                            </a>
                            <a class="navbar-item" href="/#/about">
                                About
                            </a>
                        </div>
                    </div>
                </div>
             </nav>
        `
    },
}

export default Header;