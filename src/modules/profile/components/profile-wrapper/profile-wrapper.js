import template from './profile-wrapper.hbs';
import {registerPartial} from "../../../../utils/registerPartial";

const profileMock =
    {
        first_name: 'Иван',
        second_name: 'Иванов',
        display_name: 'Иван',
        login: 'ivanivanov',
        email: 'pochta@yandex.ru',
        phone: '+7 (909) 967 30 30',
        avatar: '',
    };

const options = {
    block: 'c-profile-wrapper',
    profile: profileMock,
};

registerPartial(template, options);

export default template;
