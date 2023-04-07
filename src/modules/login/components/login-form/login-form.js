import template from './login-form.hbs';
import {registerPartial} from "../../../../utils/registerPartial";

const options = {
    block: 'c-login-form',
};

registerPartial(template, options);

export default template;
