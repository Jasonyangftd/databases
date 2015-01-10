var db = require('../db');
//db.connection.query('source schema.sql');



module.exports = {
  messages: {
    get: function () {
      //select text from messages where username = req.username
    }, // a function which produces all the messages
    post: function (req,res) {
      console.log('this is req.body.username in messages: ',req.body.username);
      db.connection.query("insert into messages ('username', 'text') values ('" + req.body.username + "', '" + req.body.message + "');",function(err){
        console.log(err);
      });

    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (req,res) {
      console.log("This is req.body in users: ",req.body);
      //enter into the database to table users
      db.connection.query('insert into messages (username) values ("' + req.body.username +'")',function(err){
        console.log(err);
      });
    }
  }
};

