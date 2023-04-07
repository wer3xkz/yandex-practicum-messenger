import template from './avatar.hbs';
import {registerPartial} from "../../utils/registerPartial";

const options = {
    block: 'c-avatar',
    size: 'default', // 'small' | 'large'
    alt: 'avatar',
};

registerPartial(template, options);

export default template;
