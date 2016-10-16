import { Template } from 'meteor/templating';

import './posts.html';

Template.postsContainer.helpers({
  posts: [
    { text: 'This is post 1' },
    { text: 'This is post 2' },
    { text: 'This is post 3' },
  ],
});
