var models = require('../models');
var bluebird = require('bluebird');



module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get();
      console.log("This is the request: ",req);
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log("inside messages post of controllers->index.js")
      models.messages.post(req,res);

    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      //models.users.get();
      console.log("Inside get and this is req.query",req.query);
      models.users.get(req,res);
    },
    post: function (req, res) {
      console.log("inside users post of controllers->index.js")
      models.users.post(req,res);
      //models[users].post(req,res);

    }
  }
};

