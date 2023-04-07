import template from './chat-message.hbs';
import {registerPartial} from "../../../../utils/registerPartial";

const options = {
    block: 'c-chat-message',
};

registerPartial(template, options);

export default template;
