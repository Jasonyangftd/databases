var db = require('../db');
//db.connection.query('source schema.sql');



module.exports = {
  messages: {
    get: function (req,res) {
      db.connection.query("select * from messages;", function(err,rows,cols){
        res.send(rows);
      });
      // console.log('This is resp', JSON.parse(resp));
      // res.end(resp);
      //select text from messages where username = req.username
    }, // a function which produces all the messages
    post: function (req,res) {
      db.connection.query('insert into messages (username, text) values ("' + req.body.username + '", "' + req.body.message + '");');
      res.end();


    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {
      console.log('This is req in users (get) :',req);
    },
    post: function (req,res) {
      //enter into the database to table users
      db.connection.query("insert into users (username) values ('" + req.body.username + "');");

      res.end();
    }
  }
};

