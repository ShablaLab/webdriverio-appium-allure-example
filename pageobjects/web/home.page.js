import Page from './page';

class HomePage extends Page {
    get flashAlert () {
        return $('.app_logo');
    }
}

export default new HomePage();
