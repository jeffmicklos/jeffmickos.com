jeffmicklos.Gallery = function() {
	
	this.thumbnailContainerSelector = 'a[class^=flickr-thumb]';
	this.numberOfPhotosToShow = 3;
	
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
	
	
	/*$.each(photosAndContainers, function(i, tuple) {
		
		var photo = tuple[0];
		var container = tuple[1];
		

		$(container)
			.attr('href', photo.url_l)
			.find('img')
			.attr('src', photo.url_m);

	});*/
	
	jeffmicklos.Util.setupLightbox();

};

jeffmicklos.Gallery.prototype.getData = function() {
	
	var data = {"query":{"count":40,"created":"2011-09-10T05:25:17Z","lang":"en-US","diagnostics":{"publiclyCallable":"true","url":{"execution-start-time":"0","execution-stop-time":"300","execution-time":"300","content":"http://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&photoset_id=72157627628558120&extras=url_m%2curl_l&page=1&per_page=40"},"user-time":"301","service-time":"300","build-version":"21220"},"results":{"photo":[{"farm":"7","height_l":"540","height_m":"338","id":"6091548381","isprimary":"1","secret":"3790f58df7","server":"6075","title":"mark_joe","url_l":"http://farm7.static.flickr.com/6075/6091548381_3790f58df7_b.jpg","url_m":"http://farm7.static.flickr.com/6075/6091548381_3790f58df7.jpg","width_l":"800","width_m":"500"},{"farm":"7","height_l":"540","height_m":"338","id":"5996311269","isprimary":"0","secret":"cb2e93b905","server":"6141","title":"boat_magnify","url_l":"http://farm7.static.flickr.com/6141/5996311269_cb2e93b905_b.jpg","url_m":"http://farm7.static.flickr.com/6141/5996311269_cb2e93b905.jpg","width_l":"800","width_m":"500"},{"farm":"7","height_l":"540","height_m":"338","id":"5996310721","isprimary":"0","secret":"ddcf870413","server":"6029","title":"coffee","url_l":"http://farm7.static.flickr.com/6029/5996310721_ddcf870413_b.jpg","url_m":"http://farm7.static.flickr.com/6029/5996310721_ddcf870413.jpg","width_l":"800","width_m":"500"},{"farm":"7","height_l":"540","height_m":"338","id":"5996310549","isprimary":"0","secret":"f2f99ab862","server":"6006","title":"alexpsd","url_l":"http://farm7.static.flickr.com/6006/5996310549_f2f99ab862_b.jpg","url_m":"http://farm7.static.flickr.com/6006/5996310549_f2f99ab862.jpg","width_l":"800","width_m":"500"},{"farm":"7","height_l":"540","height_m":"338","id":"5996310241","isprimary":"0","secret":"0b36b460d7","server":"6121","title":"matrix","url_l":"http://farm7.static.flickr.com/6121/5996310241_0b36b460d7_b.jpg","url_m":"http://farm7.static.flickr.com/6121/5996310241_0b36b460d7.jpg","width_l":"800","width_m":"500"},{"farm":"7","height_l":"540","height_m":"338","id":"5996310147","isprimary":"0","secret":"2be0af3ab5","server":"6124","title":"alex_2","url_l":"http://farm7.static.flickr.com/6124/5996310147_2be0af3ab5_b.jpg","url_m":"http://farm7.static.flickr.com/6124/5996310147_2be0af3ab5.jpg","width_l":"800","width_m":"500"},{"farm":"7","height_l":"540","height_m":"338","id":"5996864510","isprimary":"0","secret":"03bc72e60e","server":"6004","title":"boats","url_l":"http://farm7.static.flickr.com/6004/5996864510_03bc72e60e_b.jpg","url_m":"http://farm7.static.flickr.com/6004/5996864510_03bc72e60e.jpg","width_l":"800","width_m":"500"},{"farm":"7","height_l":"540","height_m":"338","id":"5996864186","isprimary":"0","secret":"924d55378b","server":"6002","title":"oliver_jason","url_l":"http://farm7.static.flickr.com/6002/5996864186_924d55378b_b.jpg","url_m":"http://farm7.static.flickr.com/6002/5996864186_924d55378b.jpg","width_l":"800","width_m":"500"},{"farm":"7","height_l":"540","height_m":"338","id":"5949125775","isprimary":"0","secret":"b75bbfd965","server":"6021","title":"annie_arm","url_l":"http://farm7.static.flickr.com/6021/5949125775_b75bbfd965_b.jpg","url_m":"http://farm7.static.flickr.com/6021/5949125775_b75bbfd965.jpg","width_l":"800","width_m":"500"},{"farm":"7","height_l":"540","height_m":"338","id":"5949682050","isprimary":"0","secret":"2fcd546391","server":"6131","title":"joe_soda","url_l":"http://farm7.static.flickr.com/6131/5949682050_2fcd546391_b.jpg","url_m":"http://farm7.static.flickr.com/6131/5949682050_2fcd546391.jpg","width_l":"800","width_m":"500"},{"farm":"7","height_l":"540","height_m":"338","id":"5949681976","isprimary":"0","secret":"e78f67c43b","server":"6003","title":"burdock","url_l":"http://farm7.static.flickr.com/6003/5949681976_e78f67c43b_b.jpg","url_m":"http://farm7.static.flickr.com/6003/5949681976_e78f67c43b.jpg","width_l":"800","width_m":"500"},{"farm":"7","height_l":"540","height_m":"338","id":"5913780734","isprimary":"0","secret":"dcc357cc73","server":"6006","title":"boz","url_l":"http://farm7.static.flickr.com/6006/5913780734_dcc357cc73_b.jpg","url_m":"http://farm7.static.flickr.com/6006/5913780734_dcc357cc73.jpg","width_l":"800","width_m":"500"},{"farm":"7","height_l":"540","height_m":"338","id":"5913780618","isprimary":"0","secret":"2b3513d731","server":"6008","title":"mark_molly","url_l":"http://farm7.static.flickr.com/6008/5913780618_2b3513d731_b.jpg","url_m":"http://farm7.static.flickr.com/6008/5913780618_2b3513d731.jpg","width_l":"800","width_m":"500"},{"farm":"7","height_l":"540","height_m":"338","id":"5913780448","isprimary":"0","secret":"20891b8fe0","server":"6029","title":"kat","url_l":"http://farm7.static.flickr.com/6029/5913780448_20891b8fe0_b.jpg","url_m":"http://farm7.static.flickr.com/6029/5913780448_20891b8fe0.jpg","width_l":"800","width_m":"500"},{"farm":"7","height_l":"540","height_m":"338","id":"5913780316","isprimary":"0","secret":"399d6fd43a","server":"6024","title":"sightglass","url_l":"http://farm7.static.flickr.com/6024/5913780316_399d6fd43a_b.jpg","url_m":"http://farm7.static.flickr.com/6024/5913780316_399d6fd43a.jpg","width_l":"800","width_m":"500"},{"farm":"4","height_l":"540","height_m":"338","id":"5782690314","isprimary":"0","secret":"ed9e0e92eb","server":"3393","title":"jackson_hyde","url_l":"http://farm4.static.flickr.com/3393/5782690314_ed9e0e92eb_b.jpg","url_m":"http://farm4.static.flickr.com/3393/5782690314_ed9e0e92eb.jpg","width_l":"800","width_m":"500"},{"farm":"4","height_l":"540","height_m":"338","id":"5727306827","isprimary":"0","secret":"1e9a8f2660","server":"3551","title":"evan","url_l":"http://farm4.static.flickr.com/3551/5727306827_1e9a8f2660_b.jpg","url_m":"http://farm4.static.flickr.com/3551/5727306827_1e9a8f2660.jpg","width_l":"800","width_m":"500"},{"farm":"3","height_l":"540","height_m":"338","id":"5727306199","isprimary":"0","secret":"74c8831fe9","server":"2184","title":"peter","url_l":"http://farm3.static.flickr.com/2184/5727306199_74c8831fe9_b.jpg","url_m":"http://farm3.static.flickr.com/2184/5727306199_74c8831fe9.jpg","width_l":"800","width_m":"500"},{"farm":"6","height_l":"800","height_m":"500","id":"5692003836","isprimary":"0","secret":"95c327361d","server":"5025","title":"sf_f21","url_l":"http://farm6.static.flickr.com/5025/5692003836_95c327361d_b.jpg","url_m":"http://farm6.static.flickr.com/5025/5692003836_95c327361d.jpg","width_l":"519","width_m":"324"},{"farm":"6","height_l":"531","height_m":"332","id":"5686034340","isprimary":"0","secret":"c125fcf3e1","server":"5187","title":"joe_camera","url_l":"http://farm6.static.flickr.com/5187/5686034340_c125fcf3e1_b.jpg","url_m":"http://farm6.static.flickr.com/5187/5686034340_c125fcf3e1.jpg","width_l":"800","width_m":"500"},{"farm":"6","height_l":"530","height_m":"331","id":"5686034224","isprimary":"0","secret":"c90a835a9e","server":"5282","title":"yerba","url_l":"http://farm6.static.flickr.com/5282/5686034224_c90a835a9e_b.jpg","url_m":"http://farm6.static.flickr.com/5282/5686034224_c90a835a9e.jpg","width_l":"800","width_m":"500"},{"farm":"6","height_l":"531","height_m":"332","id":"5685465121","isprimary":"0","secret":"ee07cdc80a","server":"5030","title":"balboa_2","url_l":"http://farm6.static.flickr.com/5030/5685465121_ee07cdc80a_b.jpg","url_m":"http://farm6.static.flickr.com/5030/5685465121_ee07cdc80a.jpg","width_l":"800","width_m":"500"},{"farm":"6","height_l":"800","height_m":"500","id":"5686033932","isprimary":"0","secret":"461640c30d","server":"5270","title":"condor","url_l":"http://farm6.static.flickr.com/5270/5686033932_461640c30d_b.jpg","url_m":"http://farm6.static.flickr.com/5270/5686033932_461640c30d.jpg","width_l":"530","width_m":"331"},{"farm":"6","height_l":"700","height_m":"500","id":"5686033838","isprimary":"0","secret":"7ea793c13d","server":"5066","title":"washington_square","url_l":"http://farm6.static.flickr.com/5066/5686033838_7ea793c13d_b.jpg","url_m":"http://farm6.static.flickr.com/5066/5686033838_7ea793c13d.jpg","width_l":"470","width_m":"336"},{"farm":"6","height_l":"534","height_m":"334","id":"5473303800","isprimary":"0","secret":"dcf9409cb8","server":"5013","title":"peter_ben","url_l":"http://farm6.static.flickr.com/5013/5473303800_dcf9409cb8_b.jpg","url_m":"http://farm6.static.flickr.com/5013/5473303800_dcf9409cb8.jpg","width_l":"800","width_m":"500"},{"farm":"5","height_l":"530","height_m":"331","id":"4965254010","isprimary":"0","secret":"51fb50d4ce","server":"4125","title":"sabin","url_l":"http://farm5.static.flickr.com/4125/4965254010_51fb50d4ce_b.jpg","url_m":"http://farm5.static.flickr.com/4125/4965254010_51fb50d4ce.jpg","width_l":"800","width_m":"500"},{"farm":"5","height_l":"531","height_m":"332","id":"4964652713","isprimary":"0","secret":"775d5bafa6","server":"4086","title":"boxes","url_l":"http://farm5.static.flickr.com/4086/4964652713_775d5bafa6_b.jpg","url_m":"http://farm5.static.flickr.com/4086/4964652713_775d5bafa6.jpg","width_l":"800","width_m":"500"},{"farm":"5","height_l":"531","height_m":"332","id":"4964651361","isprimary":"0","secret":"0d1256e262","server":"4153","title":"joe_huntington","url_l":"http://farm5.static.flickr.com/4153/4964651361_0d1256e262_b.jpg","url_m":"http://farm5.static.flickr.com/4153/4964651361_0d1256e262.jpg","width_l":"800","width_m":"500"},{"farm":"5","height_l":"531","height_m":"332","id":"4965252084","isprimary":"0","secret":"797c1c1d6f","server":"4125","title":"corner","url_l":"http://farm5.static.flickr.com/4125/4965252084_797c1c1d6f_b.jpg","url_m":"http://farm5.static.flickr.com/4125/4965252084_797c1c1d6f.jpg","width_l":"800","width_m":"500"},{"farm":"5","height_l":"530","height_m":"331","id":"4950009403","isprimary":"0","secret":"e35b0c94d9","server":"4081","title":"9th","url_l":"http://farm5.static.flickr.com/4081/4950009403_e35b0c94d9_b.jpg","url_m":"http://farm5.static.flickr.com/4081/4950009403_e35b0c94d9.jpg","width_l":"800","width_m":"500"},{"farm":"5","height_l":"530","height_m":"331","id":"4950009363","isprimary":"0","secret":"ecc83a33b9","server":"4087","title":"annie_craftfair","url_l":"http://farm5.static.flickr.com/4087/4950009363_ecc83a33b9_b.jpg","url_m":"http://farm5.static.flickr.com/4087/4950009363_ecc83a33b9.jpg","width_l":"800","width_m":"500"},{"farm":"5","height_m":"333","id":"4494473973","isprimary":"0","secret":"8f26edb400","server":"4040","title":"joe_car","url_m":"http://farm5.static.flickr.com/4040/4494473973_8f26edb400.jpg","width_m":"500"},{"farm":"3","height_m":"500","id":"4415236032","isprimary":"0","secret":"2ba1951d2d","server":"2693","title":"stockon_film","url_m":"http://farm3.static.flickr.com/2693/4415236032_2ba1951d2d.jpg","width_m":"500"},{"farm":"5","height_m":"315","id":"4414468233","isprimary":"0","secret":"b6db4c7f23","server":"4067","title":"joe_hillcrest_film","url_m":"http://farm5.static.flickr.com/4067/4414468233_b6db4c7f23.jpg","width_m":"500"},{"farm":"5","height_m":"332","id":"4415235736","isprimary":"0","secret":"53f59b8a03","server":"4007","title":"chris_disneyland_2","url_m":"http://farm5.static.flickr.com/4007/4415235736_53f59b8a03.jpg","width_m":"500"},{"farm":"5","height_m":"332","id":"4415235672","isprimary":"0","secret":"df1785bcae","server":"4013","title":"chris_disneyland","url_m":"http://farm5.static.flickr.com/4013/4415235672_df1785bcae.jpg","width_m":"500"},{"farm":"5","height_m":"332","id":"4414467223","isprimary":"0","secret":"18344e082b","server":"4022","title":"balboapark_film","url_m":"http://farm5.static.flickr.com/4022/4414467223_18344e082b.jpg","width_m":"500"},{"farm":"5","height_m":"283","id":"4415234676","isprimary":"0","secret":"2d903730c5","server":"4006","title":"annie-film","url_m":"http://farm5.static.flickr.com/4006/4415234676_2d903730c5.jpg","width_m":"500"},{"farm":"5","height_m":"332","id":"4412389324","isprimary":"0","secret":"4908d72b09","server":"4060","title":"sammies","url_m":"http://farm5.static.flickr.com/4060/4412389324_4908d72b09.jpg","width_m":"500"},{"farm":"5","height_m":"334","id":"4411620471","isprimary":"0","secret":"9c555cd7e6","server":"4035","title":"durand","url_m":"http://farm5.static.flickr.com/4035/4411620471_9c555cd7e6.jpg","width_m":"500"}]}}};
	this.handleData(data);
	
	/*var self = this,
		url = "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20flickr.photosets.photos(0%2C40)%20where%20photoset_id%3D'72157627628558120'%20AND%20extras%3D'url_m%2Curl_l'&format=json&diagnostics=true";
	
	$.getJSON(url, function(data) {
		
		var photos = $.shuffle(data.query.results.photo);
		var selectedPhotos = photos.slice(0, 3);
		var photosAndContainers = $.zip(selectedPhotos, $('.flickr-photos'));
		
		$.each(photosAndContainers, function(i, tuple) {
			
			var photo = tuple[0];
			var container = tuple[1];
			
			$(container)
				.attr('href', photo.url_l)
				.find('img')
				.attr('src', photo.url_m);
			
		});
		
	});*/

};