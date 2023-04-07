import template from './icon.hbs';
import {registerPartial} from "../../utils/registerPartial";

const options = {
    block: 'c-icon',
    size: 'default', // 'small' | 'large'
};

registerPartial(template, options);

export default template;
