var models = require('../models');
var bluebird = require('bluebird');



module.exports = {
  messages: {
    get: function (req, res) {

      models.messages.get(req,res);
      //console.log("This is the request: ",req);
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      // console.log("this is the body: ",req.body);
      models.messages.post(req,res);

    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      //models.users.get();
      // console.log("Inside get and this is req.query",req.query);
      models.users.get(req,res);
    },
    post: function (req, res) {
      models.users.post(req,res);
      //models[users].post(req,res);

    }
  }
};

