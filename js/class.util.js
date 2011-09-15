jeffmicklos.Util = {
	
	setupLightbox: function(selector, options) {
		
		var defaultSelector = 'a[rel=lightbox]';
		var defaultOptions = {
			'titlePosition': 'inside',
			'centerOnScroll': true
		};
		
		var selector = selector || defaultSelector;
		var settings = $.extend({}, defaultOptions, options);
		
		$(selector).fancybox(settings);
		
	}
	
};