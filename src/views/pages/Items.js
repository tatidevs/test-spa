import Page from './Page.js';

export class ItemsPage extends Page {
    constructor() {
        super();

        this.template = `
            <section class="section"> 
                <button id="back" class="button back">Go back</button>               
                <h2> Items </h2>

                <table class="table">
                    ${ this.itemsList().map(item => `
                        <tr>
                            <td>${item.name}</td> <td>${item.quantity}</td> <td>${item.price}</td>
                        </tr>
                    `).join('\n ') }
                </table>
              
                <p> Total: ${this.itemsList().length} </p>
            </section>
        `;
    };

    itemsList() {
        return [
            { name:"item1", quantity:"1", price:"20" },
            { name:"item2", quantity:"5", price:"5" },
            { name:"item3", quantity:"3", price:"30" },
        ];
    }
}

export default ItemsPage;