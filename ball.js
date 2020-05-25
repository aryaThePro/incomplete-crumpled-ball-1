class paper{
    constructor(x, y){
        var options = {
            'isStatic': false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        
        this.body = circle(x, y, 50, 50, options);
        this.width = 50;
        this.height = 50;

        

        World.add(world, this.body);
   
   
    }  
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        pos.x = mouseX;
        pos.y = mouseY;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        
        ellipseMode(RADIUS);
        
        strokeWeight(4);
        stroke("green");

        fill("red");
        circle(0, 0, this.width, this.height);
        pop(); // used to rotate a falling object at a certaing angle while sriking another object
    }
};
