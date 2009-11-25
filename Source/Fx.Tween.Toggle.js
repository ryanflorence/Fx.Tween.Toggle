Fx.Tween.Toggle = new Class({
	
	Extends: Fx.Tween,
	
		options: {
			/*
			onToggle: $empty,
			onToggleIn: $empty,
			onToggleOut: $empty,
			*/
			property: 'opacity',
			from: 0,
			to: 1
		},
	
	toggle: function(event){
		if(event) event.stop();
		(this.toggled) ? this.toggleOut() : this.toggleIn();
		this.fireEvent('onToggle');
		return this;
	},
	
	toggleIn: function(){
		this.toggled = true;
		this.start(this.options.to);
		this.fireEvent('onToggleIn');
		return this;
	},
	
	toggleOut: function(){
		this.toggled = false;
		this.start(this.options.from);
		this.fireEvent('onToggleOut');
		return this;
	},
	
	setIn: function(){
		this.toggled = true
		this.set(this.options.to);
		return this;
	},
	
	setOut: function(){
		this.toggled = false;
		this.set(this.options.from);
		return this;
	}
	
});