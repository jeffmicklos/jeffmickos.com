jeffmicklos.ContactForm = function() {
	
	var contactForm = this;
	
	$('input[required]').blur(function(e) {
		contactForm.inputHasError(e);
	});
	
	$('#contact').submit(function(e) {
		contactForm.onContactSubmit(e);
	});

};

jeffmicklos.ContactForm.prototype.inputHasError = function(e) {

	var input = $(e.target);

	if(input.val() === '') {
		input.removeClass('success').addClass('error');
		return true;
	} else {
		input.removeClass('error').addClass('success');
		return false;
	}

};

jeffmicklos.ContactForm.prototype.isFormValid = function() {
	
	var inputStatus = [],
		contactForm = this;
	
	$.each($('input[required]'), function(i, input) {
		inputStatus.push(contactForm.inputHasError(input));
	});
	
	return !($.inArray(false, inputStatus));
	
};

jeffmicklos.ContactForm.prototype.onContactSubmit = function(e) {
	
	e.preventDefault();

	if(this.isFormValid()) {
		
		$.post(
			'ajax/contact.php',
			$(e.element).serialize()
		).success(function(data) {
			alert('sweeet awesome thanks i love you!');
		});
		
	}
	
};