import template from './time.hbs';
import {registerPartial} from "../../utils/registerPartial";

const options = {
    block: 'c-time',
    theme: 'default', // 'default' | 'pill'
};

registerPartial(template, options);

export default template;
