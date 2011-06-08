/**
	Class that helps to manage mouse input.
	Code by Rob Kleffner, 2011
*/

$e.Buttons = {
    MouseLeft: 0,
	MouseRight: 2,
	MouseWheel: 1
};

$e.Mouse = {
	x: 0,
	y: 0,
    pressed: [],
	element: null,
    
    initialize: function(element) {
        var self = this;
		this.element = element;
        element.onmousedown = function(event) { self.mouseDownEvent(event); };
        element.onmouseup = function(event) { self.mouseUpEvent(event); };
		element.onmousemove = function(event) { self.mouseMoveEvent(event); };
    },
    
    isButtonDown: function(key) {
        if (this.pressed[key] !== null) {
            return this.pressed[key];
		}
        return false;
    },
    
    mouseDownEvent: function(event) {
        this.pressed[event.button] = true;
    },
    
    mouseUpEvent: function(event) {
        this.pressed[event.button] = false;
    },
	
	mouseMoveEvent: function(event) {
		this.x = event.pageX;
		this.y = event.pageY;
		
		var obj = this.element;
		if (obj.offsetParent) {
			do {
				this.x -= obj.offsetLeft;
				this.y -= obj.offsetTop;
			} while (obj = obj.offsetParent);
		}
	}
};