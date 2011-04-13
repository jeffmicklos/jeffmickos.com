jeffmicklos.SocialActivity = function() {
	
	this.getData();
	
};

jeffmicklos.SocialActivity.prototype.renderList = function(set, ol) {
	
	$.each(set, function(i, item) {
		ol.append('<li><a href="'+item.link+'">' + item.title + '</a></li>').fadeIn();
	});
	
};

jeffmicklos.SocialActivity.prototype.getData = function() {
	
	var self = this;
	
	$.getJSON('http://pipes.yahoo.com/pipes/pipe.run?_id=587079d7c36cbda98f7127351a437076&_render=json', function(data) {

		var segments = $.segment(data.value.items, 5);
		
		var ols = [
			$('#list-lastfm'),
			$('#list-google'),
			$('#list-flickr')
		];
		
		$.each(segments, function(i, item) {
			self.renderList(item, ols[i].empty());
		});

	});
	
};