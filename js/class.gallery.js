jeffmicklos.Gallery = function() {
	
	this.thumbnailContainerSelector = 'a[class^=flickr-thumb]';
	this.numberOfPhotosToShow = 3;
	this.yqlEndpoint = "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20flickr.photosets.photos(0%2C40)%20where%20photoset_id%3D'72157627628558120'%20AND%20api_key%3D'1895311ec0d2e23431a6407f3e8dffcc'%20AND%20extras%3D'url_m%2Curl_l'&format=json";
	this.localEndpoint = '/flickr_photos.json';
	
	this.getData();
	
	
};

jeffmicklos.Gallery.prototype.handleData = function(data) {
	
	var photos = $.shuffle(data.query.results.photo);
	var selectedPhotos = photos.slice(0, this.numberOfPhotosToShow);
	var photosAndContainers = $.zip(selectedPhotos, $(this.thumbnailContainerSelector));
	
	this.renderPhotos(photosAndContainers);
	
};

jeffmicklos.Gallery.prototype.renderPhotos = function(photosAndContainers) {
	
	var iterator = function iterator(i) {
		
		if(photosAndContainers[i]) {
			
			var tuple = photosAndContainers[i];
			var photo = tuple[0];
			var container = tuple[1];
			var photoElement = $('<img/>').attr('src', photo.url_m);
			
			$(container).attr('href', photo.url_l);
			$(container).append(photoElement);
			
			photoElement.hide().delay(1000).fadeIn();
				
			iterator(i + 1);

		}
		
	}(0);
	
	jeffmicklos.Util.setupLightbox();

};

jeffmicklos.Gallery.prototype.getData = function() {
	
	var gallery = this;
	
	$.getJSON(this.yqlEndpoint, function(data) {

		if(data && data.query && data.query.count) {
			
			gallery.handleData(data);
			
		} else {
		
			gallery.getLocalData();
			
		}
		
	});

};

jeffmicklos.Gallery.prototype.getLocalData = function() {

	$.getJSON(this.localEndpoint, $.proxy(this.handleData, this));

};