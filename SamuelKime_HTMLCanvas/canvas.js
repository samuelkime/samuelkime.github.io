// Samuel Kime
var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

//c.fillStyle = 'rgba(255, 0, 0, 0.5)';
//c.fillRect(100, 100, 100, 100);
//c.fillStyle = 'rgba(0, 255, 0, 0.2)';
//c.fillRect(100, 300, 100, 100);
//c.fillStyle = ('rgba(0, 0, 255, 0.8)');
//c.fillRect(300, 100, 100, 100);
//console.log(canvas);

//Line
//c.beginPath();
//c.moveTo(50, 400);
//c.lineTo(200, 100);
//c.lineTo(400, 400);
//c.strokeStyle = "red";
//c.stroke();

// Arc / Circle


//for (let i = 0; i < 40; i++) {
//    var x = Math.random() * window.innerHeight;
//    var y = Math.random() * window.innerWidth;
//    c.beginPath();
//    c.arc(x, y, 30, 0, Math.PI * 2, false);
//   c.strokeStyle = 'green';
//    c.stroke();
//}
    function Circle(x, y, dx, dy, radius){
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;

        this.draw = function(){
            c.beginPath();
            c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            c.strokeStyle = 'green';
            c.stroke();
        }
        this.update = function(){
            if (this.x + radius > innerWidth || this.x - radius < 0){
                this.dx = -this.dx;
            }
            if (this.y + radius > innerHeight || this.y - radius < 0){
                this.dy = -this.dy;
            }
            this.x += this.dx;
            this.y += this.dy;

            this.draw();
        }
    }
    
    var circleArray = [];

    for (var i = 0; i < 300; i++){
        var x = Math.random() * (innerWidth - radius * 2) + radius;
        var y = Math.random() * (innerHeight - radius * 2) + radius;
        var dx = (Math.random() - 0.5);
        var dy = (Math.random() - 0.5);
        var radius = 30;
        circleArray.push(new Circle(x, y, dx, dy, radius));
    }
//    var circle = new Circle(200, 200, 3, 3, 30);
    
//    var x = Math.random() * innerWidth;
//    var y = Math.random() * innerHeight;
//    var dx = (Math.random() - 0.5) * 8;
//    var dy = (Math.random() - 0.5) * 8;
//    var radius = 30;
    function animate(){
        requestAnimationFrame(animate);
        c.clearRect(0,0, innerWidth, innerHeight);
        for (var i = 0; i < circleArray.length; i++) {
            circleArray[i].update();
        }
    }

    animate();