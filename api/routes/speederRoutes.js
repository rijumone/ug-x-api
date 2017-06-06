'use strict';
module.exports = function(app) {
  var speeder = require('../controllers/speederController');


  // speeder Routes
  app.route('/speeders')
    .get(speeder.list_all_speeders)
    .post(speeder.create_a_speeder);


  app.route('/speeders/:speederId')
    .get(speeder.read_a_speeder)
    .put(speeder.update_a_speeder)
    .delete(speeder.delete_a_speeder);
};
