class ball {
    constructor(x,y,r){

    
        this.image=loadImage("paper.png")
        var b_option={
    
            restitution:0.6,
            friction:0.5,
            density:1.2
        
          }
    
        this.body=Bodies.circle(x,y,r,b_option)
        World.add(world,this.body);
    
    }
      display()
      {
     //   ellipseMode(RADIUS);
      //  ellipse(this.body.position.x,this.body.position.y,10,10)
      imageMode(CENTER)
      image(this.image,this.body.position.x,this.body.position.y,45,45)
      }
    
    
    }
   