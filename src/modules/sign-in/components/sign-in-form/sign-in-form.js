import template from './sign-in-form.hbs';
import {registerPartial} from "../../../../utils/registerPartial";

const options = {
    block: 'c-sign-in-form',
};

registerPartial(template, options);

export default template;
