import Page from './page';

class HomePage extends Page {
    get flashAlert () {
        return $('~test-Cart');
    }
}

export default new HomePage();
