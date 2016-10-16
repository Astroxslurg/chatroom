import { Template } from 'meteor/templating';
import './posts.html';
import { Posts } from '../api/posts.js';

Template.postsTemplate.helpers({
  posts: function () {
    return Posts.find({});
  },
});
