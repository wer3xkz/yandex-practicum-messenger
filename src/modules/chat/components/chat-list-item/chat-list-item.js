import template from './chat-list-item.hbs';
import {registerPartial} from "../../../../utils/registerPartial";

const options = {
    block: 'c-chat-list-item',
};

registerPartial(template, options);

export default template;
