import template from './chat-conversation.hbs';
import {registerPartial} from "../../../../utils/registerPartial";

const options = {
    block: 'c-chat-conversation',
};

registerPartial(template, options);

export default template;
