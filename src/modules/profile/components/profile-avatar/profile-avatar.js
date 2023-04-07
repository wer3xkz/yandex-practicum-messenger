import template from './profile-avatar.hbs';
import {registerPartial} from "../../../../utils/registerPartial";

const options = {
    block: 'c-profile-avatar',
};

registerPartial(template, options);

export default template;
