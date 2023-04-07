// Helpers
import utilsHelper from './helpers/utils';

// Components
import Components from './components'

// Modules
import loginForm from './modules/login/components/login-form/login-form';
import sigInForm from './modules/sign-in/components/sign-in-form/sign-in-form';
import Chat from './modules/chat';
import Profile from './modules/profile';

// Pages
import mainPage from './pages/main.hbs';
import chatPage from './pages/chat.hbs';
import loginPage from './pages/login.hbs';
import singInPage from './pages/sing-in.hbs';
import profilePage from './pages/profile.hbs';
import profileEditPage from './pages/profile-edit.hbs';
import profileChangePassword from './pages/profile-change-password.hbs';
import errorPage from './pages/error.hbs';

// Layouts
import baseLayout from './layouts/base-layout.hbs';


const ROUTES_MAP = new Map();
ROUTES_MAP.set('/', {cmp: mainPage});
ROUTES_MAP.set('/chat', {cmp: chatPage});
ROUTES_MAP.set('/login', {cmp: loginPage});
ROUTES_MAP.set('/sign-in', {cmp: singInPage});
ROUTES_MAP.set('/profile', {cmp: profilePage});
ROUTES_MAP.set('/profile/edit', {cmp: profileEditPage});
ROUTES_MAP.set('/profile/change-password', {cmp: profileChangePassword});
ROUTES_MAP.set('error', {
    cmp: errorPage,
    params: {
        // errorCode: 500,
        // errorText: 'Упс! произошла ошибка. Попробуйте позднее.',
        errorCode: 404,
        errorTitle: 'Не туда попали',
    },
});


const renderPage = (host, page) => {
    let route = ROUTES_MAP.get(page);

    if (!route) {
        route = ROUTES_MAP.get('error');
    }

    host.innerHTML = '';
    host.insertAdjacentHTML('afterbegin', route?.cmp && route?.cmp(route?.params));
};


function bootstrap() {
    const app = document.getElementById('app');

    if (!app) {
        return;
    }

    app.insertAdjacentHTML('afterbegin', baseLayout());

    const routerOutlet = document.getElementById('router-outlet');

    if (!routerOutlet) {
        return;
    }

    // Simple route
    app.addEventListener('click', (event) => {
        const target = event.target;

        if (
            target.nodeName === 'A'
            && target.getAttribute('target') !== '_blank'
        ) {
            event.preventDefault();
            const href = target.getAttribute('href');
            window.history.pushState('', 'Chat', href);
            renderPage(routerOutlet, href);
        }
    });

    window.addEventListener('popstate', () => {
        renderPage(routerOutlet, window.location.pathname);
    });

    renderPage(routerOutlet, document.location.pathname);
}

if (document.readyState === 'complete') {
    bootstrap();
} else {
    document.addEventListener('DOMContentLoaded', bootstrap);
}
