// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
	//initalize method to start the methods
  initialize: function(){
  	//using the var that to bind the state of 'this'
  	var that = this;
  	//listening for the 'add' method
	this.on('add',function(){
		//Checking the queue for the purpose of autoplay
		if(this.length < 2){

			this.playFirst();
		} 
	}),
	this.on('ended', function(){
		this.remove(this.at(0))
		if(this.length > 0){
			this.playFirst();
		} 
	}),
	this.on('dequeue', function(){
		this.remove(this.at(0));
		this.playFirst();
	})

  },

  playFirst: function(){
  	this.at(0).play();
  	
  }
});
