import template from './chat-list-toolbar.hbs';
import {registerPartial} from "../../../../utils/registerPartial";

const options = {
    block: 'c-chat-list-toolbar',
};

registerPartial(template, options);

export default template;
