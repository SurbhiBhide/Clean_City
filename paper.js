class Paper
{
    constructor(x,y,r)
    {
        var options=
        {
            'restitution':0.3,
            'isStatic':false,
            'friction':0.5,
            'density':1.2
        }
        this.x=x;
        this.y=y;
        this.radius=r;
        this.image = loadImage("paper.png");
        this.body=Bodies.circle(x,y,this.radius,options);
        World.add(world,this.body);
        
     
        
    }

    display()
    {
        var pos=this.body.position;
        push();
        fill("white");
        translate(pos.x,pos.y);
        
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.rdadius);
        imageMode(CENTER);
        image(this.image,0,0,100,100);
        pop();
    }
}