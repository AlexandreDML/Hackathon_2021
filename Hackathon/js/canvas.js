// canvas variables
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var $canvas = $("#canvas");
var canvasOffset = $canvas.offset();
var offsetX = canvasOffset.left;
var offsetY = canvasOffset.top;
var scrollX = $canvas.scrollLeft();
var scrollY = $canvas.scrollTop();

// set styles

// create a triangle and parallelogram object

var ajaccioPrunelli = {
    points: [{
        x: 686,
        y: 434
    }, {
        x: 736,
        y: 408
    }],
		color: "red",
		width: "5"
}

var prunelliGolo = {
    points: [{
        x: 736,
        y: 408
    }, {
        x: 754,
        y: 273
    }],
		color: "green",
		width: "5"
}

var goloBastia = {
    points: [{
        x: 754,
        y: 273
    }, {
        x: 832,
        y: 180
    }],
		color: "green",
		width: "5"
}

var bastiaBiogaz = {
	points: [{
			x: 832,
			y: 180
	}, {
			x: 841,
			y: 333
	}],
	color: "green",
	width: "5"
}

var biogazGolo = {
	points: [{
		x: 841,
		y: 333
	}, {
		x: 754,
		y: 273
	}],
	color: "green",
	width: "5"
}


var bastia = {
    points: [{
        x: 860 ,
        y: 140
    }, {
        x: 875,
        y: 170
    }, {
        x: 845,
        y: 170
    }],
    name: "bastia",
		color: "orange",
		width: "2"
}

var ajaccio = {
	points: [{
			x: 655 ,
			y: 430
	}, {
			x: 670,
			y: 460
	}, {
			x: 640,
			y: 460
	}],
	name: "ajaccio",
	color: "orange",
	width: "2"
}

var prunelli = {
	points: [{
			x: 750 ,
			y: 400
	}, {
			x: 775,
			y: 400
	}, {
			x: 775,
			y: 425
	}, {
			x: 750,
			y: 425
	}],
	name: "prunelli",
	color: "blue",
	width: "2"
}

var golo = {
	points: [{
			x: 720,
			y: 250
	}, {
			x: 745,
			y: 250
	}, {
			x: 745,
			y: 275
	}, {
			x: 720,
			y: 275
	}],
	name: "golo",
	color: "blue",
	width: "2"
}

var biogaz = {
	points: [{
			x: 860,
			y: 330
	}, {
			x: 875,
			y: 345
	}, {
			x: 860,
			y: 360
	}, {
			x: 845,
			y: 345
	}],
	name: "biogaz",
	color: "limegreen",
	width: "2"
}
// save the triangle and parallelogram in a shapes[] array

var shapes = [];
shapes.push(ajaccioPrunelli);
shapes.push(prunelliGolo);
shapes.push(goloBastia);
shapes.push(bastiaBiogaz);
shapes.push(biogazGolo);
shapes.push(bastia);
shapes.push(ajaccio);
shapes.push(prunelli);
shapes.push(golo);
shapes.push(biogaz);
// function to draw (but not fill/stroke) a shape
// (needed because isPointInPath only tests the last defined path)

function define(shape) {
    var points = shape.points;
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    for (var i = 1; i < points.length; i++) {
        ctx.lineTo(points[i].x, points[i].y);
    }
}

// function to display a shape on the canvas (define + fill + stroke)

function draw(shape) {
		ctx.fillStyle = shape.color;
		ctx.strokeStyle = shape.color;
		ctx.lineWidth = shape.width;
    define(shape);
    ctx.fill();
    ctx.stroke();
}

// display the triangle and parallelogram
draw(ajaccioPrunelli);
draw(prunelliGolo);
draw(goloBastia);
draw(bastiaBiogaz);
draw(biogazGolo);
draw(bastia);
draw(ajaccio);
draw(prunelli);
draw(golo);
draw(biogaz);
// called when user clicks the mouse

function handleMouseDown(e) {
    e.preventDefault();

    // get the mouse position
    var mouseX = parseInt(e.clientX - offsetX);
    var mouseY = parseInt(e.clientY - offsetY);

		console.log(mouseX, mouseY);

    // iterate each shape in the shapes array
    for (var i = 0; i < shapes.length; i++) {
        var shape = shapes[i];
        // define the current shape
        define(shape);
        // test if the mouse is in the current shape
        if (ctx.isPointInPath(mouseX, mouseY)) {
            // if inside, display the shape's message
						if(shape.name){
							document.getElementById(shape.name).style.display = 'block';
						}else{
							ctx.fillStyle == "Green"? ctx.fillStyle = "Red":ctx.fillStyle = "Green";
							ctx.strokeStyle == "Green"? ctx.strokeStyle = "Red":ctx.strokeStyle = "Green";
							ctx.fill();
					    ctx.stroke();
						}
        }
    }

}

// listen for mousedown events
$("#canvas").mousedown(function (e) {
    handleMouseDown(e);
});
