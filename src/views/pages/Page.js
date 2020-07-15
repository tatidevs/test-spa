import Router from '../../routing/Router.js';

class Page {
    constructor(template) {
        this.template = template;
    }

    render() {
        return this.template;
    }

    afterRender() {
        document.getElementById('back').addEventListener('click', this.goBack.bind(this))
    }

    async goBack() {
        await Router.historyBack();
    }
}

export default Page;