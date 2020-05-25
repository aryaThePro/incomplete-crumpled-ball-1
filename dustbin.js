class dustbin{
    constructor(x, y, height, angle, width){
        var options = {
            'isStatic':true,
            'restitution':0.8,
            'friction':2,
            'density':1.0
        }
        
        this.body = Bodies.rectangle(x, y, 20, height, options);
        this.width = width;
        this.height = height;

        Matter.Body.setAngle(this.body,angle);

        World.add(world, this.body);
   
   
    }  
    
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        
        rectMode(CENTER);
        
        strokeWeight(4);
        stroke("green");

        fill("red");
        rect(0, 0, this.width, this.height);
        pop(); // used to rotate a falling object at a certaing angle while sriking another object
    }
};