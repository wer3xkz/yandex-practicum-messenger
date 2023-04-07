import template from './badge.hbs';
import {registerPartial} from "../../utils/registerPartial";

const options = {
    block: 'c-badge',
    theme: 'default', // 'default' | 'danger' | 'warning'
};

registerPartial(template, options);

export default template;
