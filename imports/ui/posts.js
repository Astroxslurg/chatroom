import { Template } from 'meteor/templating';
import './posts.html';
import { Posts } from '../api/posts.js';

Template.postsTemplate.helpers({
  posts: function () {
    return Posts.find({});
  },
});

Template.postsSubmit.events({
  'submit .posts-submit-form'(event) {
    event.preventDefault();

    const text = event.target.text.value;
    // console.log(event.target);

    Posts.insert({
      text
    });

    event.target.text.value = '';
  },
});
