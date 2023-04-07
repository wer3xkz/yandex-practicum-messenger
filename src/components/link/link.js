import template from './link.hbs';
import {registerPartial} from "../../utils/registerPartial";

const options = {
    block: 'c-link',
    theme: 'default', // 'default' | 'danger' | 'warning'
    target: '_self'
};

registerPartial(template, options);

export default template;
