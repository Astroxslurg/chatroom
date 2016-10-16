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

    user = Meteor.user();
    if(!user){
      console.log("You need to be logged in to post messages");
      return false;
    }

    const text = event.target.text.value;
    // console.log(event.target);

    Posts.insert({
      user,
      text
    });

    event.target.text.value = '';
  },
});
