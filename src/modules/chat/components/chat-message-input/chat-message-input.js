import template from './chat-message-input.hbs';
import {registerPartial} from "../../../../utils/registerPartial";

const options = {
    block: 'c-chat-message-input',
};

registerPartial(template, options);

export default template;
