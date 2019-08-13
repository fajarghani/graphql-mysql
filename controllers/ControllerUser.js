'use strict';

var response = require('./../res');
var connection = require('./../conn');

exports.users = function (req, res) {

    connection.query('SELECT * FROM person',
        function (error, rows, fields) {
            if (error) {
                console.log(error)
            } else {
                response.success(rows, res)
            }
        });
};

exports.findUsers = function (req, res) {

    var id = req.params.id;

    connection.query('SELECT * FROM person where id = ?',
        [id],
        function (error, rows, fields) {
            if (error) {
                console.log(error)
            } else {
                response.success(rows, res)
            }
        });
};

exports.createUsers = function (req, res) {

    var first_name = req.body.first_name;
    var last_name = req.body.last_name;

    connection.query('INSERT INTO person (first_name, last_name) values (?,?)',
        [first_name, last_name],
        function (error, rows, fields) {
            if (error) {
                console.log(error)
            } else {
                response.success("Berhasil menambahkan user!", res)
            }
        });
};

exports.updateUsers = function (req, res) {

    var id = req.body.id;
    var first_name = req.body.first_name;
    var last_name = req.body.last_name;

    connection.query('UPDATE person SET first_name = ?, last_name = ? WHERE id = ?',
        [first_name, last_name, id],
        function (error, rows, fields) {
            if (error) {
                console.log(error)
            } else {
                response.success("Berhasil merubah user!", res)
            }
        });
};

exports.deleteUsers = function (req, res) {

    var id = req.body.id;

    connection.query('DELETE FROM person WHERE id = ?',
        [id],
        function (error, rows, fields) {
            if (error) {
                console.log(error)
            } else {
                response.success("Berhasil menghapus user!", res)
            }
        });
};

exports.index = function (req, res) {
    response.success("Hello from the Node JS RESTful side!", res)
};