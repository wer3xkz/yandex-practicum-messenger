import Handlebars from 'handlebars';

export const registerPartial = (template, options) => {
    Handlebars.registerPartial(options.block,(data, context) => template({...options, ...data}));
}


