window.addEvent('domready',function(){
	
	var myToggle = new Fx.Tween.Toggle('element',{
		property: 'height',
		from: 0,
		to: 200,
		link: 'cancel',
		onToggle: function(){
			$('onToggle').highlight('#000');
		},
		onToggleIn: function(){
			$('onToggleIn').highlight('#000');
		},
		onToggleOut: function(){
			$('onToggleOut').highlight('#000');
		}
	}).setIn();
	
	$('toggle').addEvent('click',function(){
		myToggle.toggle();
	});
	$('toggleIn').addEvent('click',function(){
		myToggle.toggleIn();
	});
	$('toggleOut').addEvent('click',function(){
		myToggle.toggleOut();
	});
	$('setIn').addEvent('click',function(){
		myToggle.setIn();
	});
	$('setOut').addEvent('click',function(){
		myToggle.setOut();
	});
	
});