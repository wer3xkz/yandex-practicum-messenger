import template from './profile-info.hbs';
import {registerPartial} from "../../../../utils/registerPartial";

const options = {
    block: 'c-profile-info',
};

registerPartial(template, options);

export default template;
