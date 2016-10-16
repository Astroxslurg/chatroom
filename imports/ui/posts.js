import { Template } from 'meteor/templating';
import './posts.html';
import { Posts } from '../api/posts.js';

Template.postsContainer.helpers({
  posts: function () {
    return Posts.find({});
  },
});
