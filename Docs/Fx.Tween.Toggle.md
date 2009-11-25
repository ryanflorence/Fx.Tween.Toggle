Class: Fx.Tween.Toggle {#Fx.Tween.Toggle}
=========================================

Extends [Fx.Tween][tween] to store and execute toggling of the effect.

### Demo

<iframe src="http://mooshell.net/rpflo/tZqJS/embedded/?tabs=result,js,html" style="width: 100%; height:500px"></iframe>

### Extends:

[Fx.Tween][tween]


Fx.Tween.Toggle Method: constructor {#Fx.Tween.Toggle:constructor}
-------------------------------------------------------------------


### Syntax:

	var myToggle = new Fx.Tween.Toggle(element, options);

### Arguments:

1. element - (mixed) An Element or the string id of an Element to apply the transition to.
2. options - (object) The [Fx.Tween][tween] options object, plus the options described below:

### Options:

* from - (mixed: defaults to `0`) The value to transition to on `toggleOut` (and `setOut`).
* to - (mixed: defaults to `1`) The value to transition to on `toggleIn` (and `setIn`).

### Events:

* The events from the [Fx][fx]
* onToggle (function) The function to execute when the effect begins.
* onToggleIn (function) The function to execute when the effect toggles in.
* onToggleOut (function) The function to execute when the effect toggles out.

### Example:

    var myToggle = new Fx.Tween.Toggle('element',{
    	property: 'height',
    	from: 0,
    	to: 300,
    	link: 'cancel',
    	onToggle: function(){
    		// do stuff
    	}
    }).setIn();


Fx.Tween.Toggle Method: toggle {#Fx.Tween.Toggle:toggle}
---------------------------------------------------------

<big>Toggles the element in our out, depending on it's current status.</big>

### Syntax:

    myToggle.toggle();

### Returns:

This Fx.Tween.Toggle instance.



Fx.Tween.Toggle Method: toggleIn {#Fx.Tween.Toggle:toggleIn}
-------------------------------------------------------------

<big>Toggles the element in (`options.to` value), if already toggled in, nothing happens</big>

### Syntax:

    myToggle.toggleIn();

### Returns:

This Fx.Tween.Toggle instance



Fx.Tween.Toggle Method: toggleOut {#Fx.Tween.Toggle:toggleOut}
---------------------------------------------------------------

<big>Toggles the element out (`options.from` value), if already toggled in, nothing happens</big>

### Syntax:

    myToggle.toggleOut();

### Returns:

This Fx.Tween.Toggle instance



Fx.Tween.Toggle Method: setIn {#Fx.Tween.Toggle:setIn}
-------------------------------------------------------

<big>Immediately sets the element to the `options.to` value without an animation.</big>

### Syntax:

    myToggle.setIn();

### Returns:

This Fx.Tween.Toggle instance.



Fx.Tween.Toggle Method: setOut {#Fx.Tween.Toggle:setOut}
---------------------------------------------------------

<big>Immediately sets the element to the `options.from` state without an animation.</big>

### Syntax:

    myToggle.setIn();

### Returns:

This Fx.Tween.Toggle instance.


[tween]: http://mootools.net/docs/core/Fx/Fx.Tween
[fx]: http://mootools.net/docs/core/Fx/Fx
