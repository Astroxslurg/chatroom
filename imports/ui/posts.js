import { Template } from 'meteor/templating';
import './posts.html';
import { Posts } from '../api/posts.js';

Template.postsTemplate.helpers({
  posts: function () {
    return Posts.find({});
  },
});

Template.postsSubmit.helpers({
  getUsername() {
    user = Meteor.user();
    return user ? user.username : null ;
  },
  getPlaceHolder() {
    user = Meteor.user();
    return user ? "Type to chat" : "Sign in to chat";
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
    // console.log(user);

    const text = event.target.text.value;
    // console.log(event.target);

    Posts.insert({
      user,
      text
    });

    event.target.text.value = '';
  },
});
