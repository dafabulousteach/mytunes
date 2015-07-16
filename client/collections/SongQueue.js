// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
  initialize: function(){
  	var that = this;
	this.on('add',function(){
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
	})

  },

  playFirst: function(){
  	this.at(0).play();
  	
  }
});
