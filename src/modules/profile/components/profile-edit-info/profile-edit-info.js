import template from './profile-edit-info.hbs';
import {registerPartial} from "../../../../utils/registerPartial";

const options = {
    block: 'c-profile-edit-info',
};

registerPartial(template, options);

export default template;
