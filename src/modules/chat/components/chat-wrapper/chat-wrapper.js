import template from './chat-wrapper.hbs';
import {registerPartial} from "../../../../utils/registerPartial";

const messageMock = [
    {
        author: 'Rick',
        direction: 'incoming',
        text: 'Morty, I need your help.\rWe need to go in a quick adventure.',
        time: 1680474039450,
    },
    {
        author: 'Rick',
        direction: 'incoming',
        text: 'Let\'s go. In and out. Twenty minutes adventure.',
        attachments: [
            {
                type: 'picture',
                // src: 'https://img.freepik.com/free-photo/digital-camera-with-flower-decoration-white-background_23-2148066471.jpg?size=626&ext=jpg&ga=GA1.2.720095622.1680365686&semt=ais',
                src: 'https://wompampsupport.azureedge.net/fetchimage?siteId=7575&v=2&jpgQuality=100&width=700&url=https%3A%2F%2Fi.kym-cdn.com%2Fentries%2Ficons%2Ffacebook%2F000%2F023%2F868%2Fa81ca366f1717035.jpg',
            },
        ],
        time: 1680474039450,
    },
    {
        author: 'You',
        direction: 'outgoing',
        text: 'Ok... let\'s go...',
        time: 1680474039450,
    },
    {
        author: 'You',
        direction: 'outgoing',
        attachments: [
            {
                type: 'picture',
                // src: 'https://img.freepik.com/free-photo/blackboard-with-camera-leaf_23-2148019256.jpg?size=626&ext=jpg&ga=GA1.1.720095622.1680365686&semt=ais',
                src: 'https://i.redd.it/vcux5yd09io71.jpg',
            },
        ],
        time: 1680992439450,
    },

];
const conversations = [
    {
        id: 1,
        name: 'Room 1',
        avatarUrl: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
        ownerId: 'Rick',
        lastMessage: messageMock[0],
        messages: messageMock,
    },
    {
        id: 2,
        name: 'Room 2',
        ownerId: 'Morty',
        avatarUrl: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
        lastMessage: messageMock[1],
        unreadCount: 3,
    },
];
let i = 8;
while (i) {
    const lastEl = {...conversations[conversations.length - 1]};
    lastEl.id = lastEl.id + 1;
    lastEl.name = `${lastEl.name.replace(/\d/ig, lastEl.id)}`;
    lastEl.avatarUrl = `${lastEl.avatarUrl.replace(/\d/ig, lastEl.id)}`;
    conversations.push(lastEl);
    i--;
}

const options = {
    block: 'c-chat-wrapper',
    conversations,
    activeConversation: conversations[0],
};

registerPartial(template, options);

export default template;
