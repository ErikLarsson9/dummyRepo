(function () {
  'use strict';

  angular
    .module('core')
    .controller('HomeController', HomeController);

  function HomeController() {
    var vm = this;
    //var mongoose = require("../../../config/lib/mongoose");
    var mongoose = require('mongoose');
    mongoose.connect(process.env.MONGOLAB_URI);
    var db = mongoose.connection;
    mongoose.connect();
    mongoose = require('mongoose');
    var kittySchema = new mongoose.Schema({
  		name: String
	});
	kittySchema.methods.speak = function () {
  	var greeting = this.name
    	? "Meow name is " + this.name
    	: "I don't have a name";
  		console.log(greeting);
	}

	var Kitten = mongoose.model('Kitten', kittySchema);

	var silence = new Kitten({ name: 'Silence' });
	console.log(silence.name);

	var fluffy = new Kitten({ name: 'fluffy' });
	fluffy.speak(); // "Meow name is fluffy"

	fluffy.save(function (err, fluffy) {
    if (err) return console.error(err);
    	fluffy.speak();
  	});

  	Kitten.find(function (err, kittens) {
  		if (err) return console.error(err);
  	console.log(kittens);
	})


  }
}());
