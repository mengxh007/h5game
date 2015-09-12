var t = 1000
var canvas, stage, id;

function handleImageLoad(event){ 
    var live = new createjs.Bitmap("asset/live.png"); live.rotation = Math.random() * 360;
            // set bitmap x location in canvas
    live.x = canvas.width * Math.random() + 10;
            // set bitmap y location in canvas
    live.y = canvas.height * Math.random() + 10;
            // add the bitmap as a child of the stage. This means it will be drawn any time the stage is updated
            // and that its transformations will be relative to the stage coordinates:
    var hitarea = new createjs.Shape();
   hitarea.graphics.beginFill("#000000").drawCircle(45, 45, 50);
    live.hitArea=hitarea;
    stage.addChild(live);

		live.on("mousedown", function (evt) {
            var dead = new createjs.Bitmap("asset/dead.png");
            dead.rotation=evt.target.rotation;
            dead.x=live.x;dead.y=live.y;
            this.parent.addChild(dead);
            this.parent.removeChild(this);
			stage.update(evt);
		});

setTimeout(handleImageLoad,t = 0.97 * t);

}

function tick(event) {

		stage.update(event);

}

(function() {
    document.addEventListener('DOMContentLoaded', function() {

        // get a reference to the canvas we'll be working with:
        canvas = document.getElementById("testCanvas");

        // set canvas width
        canvas.width = window.innerWidth;
        // set canvas height
        canvas.height = window.innerHeight;

        // create a stage object to work with the canvas. This is the top level node in the display list:
        stage = new createjs.Stage(canvas);
		createjs.Touch.enable(stage);
        // create a new Image object
		createjs.Ticker.addEventListener("tick", tick);        
        id=setTimeout(handleImageLoad,t = 0.97 * t);
    }, false);
}());