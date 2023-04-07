import template from './chat-conversation-toolbar.hbs';
import {registerPartial} from "../../../../utils/registerPartial";

const options = {
    block: 'c-chat-conversation-toolbar',
};

registerPartial(template, options);

export default template;
