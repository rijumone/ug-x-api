'use strict';


var mongoose = require('mongoose'),
  Speeder = mongoose.model('Speeders');

exports.list_all_speeders = function(req, res) {
  Speeder.find({}, function(err, speeder) {
    if (err)
      res.send(err);
    res.json(speeder);
  });
};




exports.create_a_speeder = function(req, res) {
  var new_speeder = new Speeder(req.body);
  new_speeder.save(function(err, speeder) {
    if (err)
      res.send(err);
    res.json(speeder);
  });
};


exports.read_a_speeder = function(req, res) {
  Speeder.findById(req.params.speederId, function(err, speeder) {
    if (err)
      res.send(err);
    res.json(speeder);
  });
};


exports.update_a_speeder = function(req, res) {
  Speeder.findOneAndUpdate(req.params.speederId, req.body, {new: true}, function(err, speeder) {
    if (err)
      res.send(err);
    res.json(speeder);
  });
};


exports.delete_a_speeder = function(req, res) {


  Speeder.remove({
    _id: req.params.speederId
  }, function(err, speeder) {
    if (err)
      res.send(err);
    res.json({ message: 'Speeder successfully deleted' });
  });
};

