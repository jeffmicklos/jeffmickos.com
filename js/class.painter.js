jeffmicklos.Painter = function() {

	this.imgCache = [];
	this.canvas = $('#paint');
	this.preloadImages([
		'images/paint/1.png',
		'images/paint/2.png',
		'images/paint/3.png',
		'images/paint/4.png',
		'images/paint/5.png'
	]);
	
	setTimeout(
		$.bind(this.showImage, this), 
		1000
	);

};

jeffmicklos.Painter.prototype.preloadImages = function(images) {
	
	var self = this;
	
	$.each(images, function(i, image) {

		self.imgCache.push(
			$('<img/>').attr('src', image).css('z-index', i)
		);

	});

	this.imgCache.reverse();

};

jeffmicklos.Painter.prototype.addChildToCanvas = function(child) {
	var extendedChild = $(child);
	this.canvas.append(extendedChild.hide());
 	return extendedChild;
};


jeffmicklos.Painter.prototype.showImage = function showImage() {

	this.addChildToCanvas(this.imgCache.pop())
 	.delay(1000)
 	.fadeIn(1000, 'linear', $.bind(function() {

 		if(this.imgCache.length) {
 			this.showImage();
 		}

 	}, this));

};