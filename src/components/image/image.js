import template from './image.hbs';
import {registerPartial} from "../../utils/registerPartial";

const options = {
    block: 'c-image',
    loading: 'lazy',
    decoding: 'async',
    width: '100%',
    ratio: '16/9',
};

registerPartial(template, options);

export default template;
