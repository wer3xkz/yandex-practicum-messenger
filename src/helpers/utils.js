import Handlebars from 'handlebars';
import {convertMsToDate, convertMsToTime} from '../utils/converters';
import {isSameDate} from '../utils/date';

Handlebars.registerHelper(
    'defValue',
    (passedValue, defaultValue) => typeof passedValue === 'undefined' ? defaultValue : passedValue
);

Handlebars.registerHelper(
    'equal',
    (value, compare) => value === compare
);

Handlebars.registerHelper(
    'unequal',
    (value, compare) => value !== compare
);

Handlebars.registerHelper(
    'msToTime',
    (value) => convertMsToTime(value)
);

Handlebars.registerHelper(
    'msToDate',
    (value) => convertMsToDate(value)
);

Handlebars.registerHelper(
    'prevMessageDateNotSame',
    (messages, currentIndex) => !isSameDate(messages[currentIndex - 1]?.time, messages[currentIndex]?.time)
);


// BEM
Handlebars.registerHelper('classModifier', (block, name, value = undefined) => {
    if (name === 'active') {
        console.warn('value: ', value);
    }
    return `${block}_${name}${value ? '_' + value : ''}`;
});

Handlebars.registerHelper('classElement', (block, el) => {
    return `${block}__${el}`;
});
