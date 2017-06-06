'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var SpeederSchema = new Schema({
  name: {
    type: String,
    index: true,
    unique: true,
    //Required: 'Kindly enter the name of the task'
  },
  origin: {
    type: String,
  },
  nickname: {
    type: String,
  },
  xp: {
    type: Number,
  },
  created_on: {
    type: Date,
    default: Date.now
  },
  friends: {
      type: String,
  },
  achievements: { 
      type: String,
  },
  lat: {
      type: Number,
  },
  long: {
      type: Number,
  },
  status: {
    type: [{
      type: String,
      enum: ['online', 'offline', 'inactive']
    }],
    default: ['online']
  }
});

module.exports = mongoose.model('Speeders', SpeederSchema);