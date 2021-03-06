import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import {Session} from 'meteor/session'
import bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './main.html';
import '../Lib/Collection.js';
import'../Lib/UserAccts.js';

import './Todolist/todolist.html';
import './Todolist/todolist.js';
import './AddTask/AddTask.html';
import './AddTask/AddTask.js';
import './ViewTask/ViewTask.html';
import './ViewTask/ViewTask.js';
import  './NavBar/NavBar.html';
import  './Login/Login.html';
import  './Login/Login.js';
import './TrashBin.html';
import './TrashBin.js';
// Template.hello.onCreated(function helloOnCreated() {
//   // counter starts at 0
//   this.counter = new ReactiveVar(0);
// });

// Template.hello.helpers({
//   counter() {
//     return Template.instance().counter.get();
//   },
// });

// Template.hello.events({
//   'click button'(event, instance) {
//     // increment the counter when button is clicked
//     instance.counter.set(instance.counter.get() + 1);
//   },
// });
//Private:Boolean
//TrashBin