Fx.Tween.Toggle
===============

Extends Fx.Tween to store and execute toggling of the effect.

![FitText](http://github.com/rpflorence/Fx.Tween.Toggle/raw/master/logo.png)

How to use
----------

    var myToggle = new Fx.Tween.Toggle('element',{
    	property: 'height',
    	from: 0,
    	to: 300,
    	link: 'cancel',
    	onToggle: function(){
    		// do stuff
    	}
    }).setIn();

View the [MooDoc](http://moodocs.net/rpflo/mootools-rpflo/Fx.Tween.Toggle) for usage and examples.