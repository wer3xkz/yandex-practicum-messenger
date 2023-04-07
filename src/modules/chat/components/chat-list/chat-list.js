import template from './chat-list.hbs';
import {registerPartial} from "../../../../utils/registerPartial";

const options = {
    block: 'c-chat-list',
};

registerPartial(template, options);

export default template;
