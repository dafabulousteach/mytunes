// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!
  initialize : function (){
  	this.render()
  	this.on('change: ', function(model){
  		//alert('SongQueueEntryView has changed');
  	})
  	
  },

  render: function(){
  	alert(this)
  }
});
