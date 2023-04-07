import template from './button.hbs';
import {registerPartial} from "../../utils/registerPartial";

const options = {
    block: 'c-button',
    theme: 'default', // 'default' | 'danger' | 'warning'
    skin: 'default', // 'default' | 'clear' | 'borderer' | 'fab'
    type: 'button',
};

registerPartial(template, options);

export default template;
