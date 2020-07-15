import { routerHistory } from '../../routing/Router.js';
import Router from '../../routing/Router.js';

let Footer = {
    render: async () => {
        return `
            <div class="footer">
                <div class="content has-text-centered">
                    <p> Current page: ${routerHistory[0].slice(1).toUpperCase() || ''} </p>
                    <p class="flex-box">
                        <span> History: </span> 
                        <button class="button" id="history-back"><--</button>
                        ${ routerHistory.map((path, i) => `
                            <button class="button ${ !i ? 'is-primary' : 'is-light' }"> 
                                ${ path.slice(1).toUpperCase() } 
                            </button>
                        `).join(' ') }
                        <button class="button" id="history-go">--></button>
                    </p>
                </div>
            </div>
        `
    },

    afterRender: () => {
        document.getElementById('history-go').addEventListener('click', Router.historyBack);
        document.getElementById('history-back').addEventListener('click', Router.historyForward);
    }
}

export default Footer;