import template from './input.hbs';
import {registerPartial} from "../../utils/registerPartial";

const options = {
    block: 'c-input',
    type: 'text', // 'text' | 'number'
    placeholder: '',
    errorMessage: 'Обязательное поле',
};

registerPartial(template, options);

export default template;
