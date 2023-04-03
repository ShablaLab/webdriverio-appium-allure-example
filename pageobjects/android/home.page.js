import Page from './page';

class HomePage extends Page {
    get flashAlert () {
        return $('.Notification-Text');
    }
}

export default new HomePage();
