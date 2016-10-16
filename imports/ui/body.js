import { Template } from 'meteor/templating';

import './body.html';

Template.body.helpers({
  posts: [
    { text: 'This is post 1' },
    { text: 'This is post 2' },
    { text: 'This is post 3' },
  ],
});
