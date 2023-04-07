import template from './profile-change-password.hbs';
import {registerPartial} from "../../../../utils/registerPartial";

const options = {
    block: 'c-profile-change-password',
};

registerPartial(template, options);

export default template;
