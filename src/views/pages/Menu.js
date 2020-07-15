import Page from './Page.js';

export class Menu extends Page{
    constructor() {
        super();

        this.template = `
           <section class="section">
               <button id="back" class="button back"> Go back </button>
                
               <div>
                   <a class="button is-light" href="/#/items"> Items </a>
                   <a class="button is-light" href="/#/about"> About </a>
               </div>
            </section>
        `;
    };
}

export default Menu;