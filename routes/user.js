'use strict';

var express = require('express')
var app = express()
const ControllerUser = require(`../Controllers/ControllerUser`);

app.route('/')
    .get(ControllerUser.index);

app.route('/users')
    .get(ControllerUser.users);

app.route('/users/:id')
    .get(ControllerUser.findUsers);

app.route('/users')
    .post(ControllerUser.createUsers);

app.route('/users')
    .put(ControllerUser.updateUsers);

app.route('/users')
    .delete(ControllerUser.deleteUsers);

module.exports = app