function Button(text) {
	this.text = text || 'Hello';
}

Button.prototype = {
	create: function() {
		this.$element = $('<button>');
	}
};

Button.prototype = {
	create: function() {
		var self = this;
		this.$element = $('<button>');
		this.$element.text(this.text);
		this.$element.on("click", function() {
			alert(self.text);
		});
		this.$element.appendTo($('body'));
	}
};

var btn1 = new Button('Hello!');

btn1.create();