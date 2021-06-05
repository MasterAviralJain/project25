class Paper
{
	constructor(x,y,width,height)
	{
		var options={
			isStatic:false,		
            "density": 16.2,
         
			"friction":50,
			"restitution":0.5,
            
			}
		this.width=width;
		this.height=height;
		this.image=loadImage("paper.png")
		this.body=Bodies.rectangle(x, y,width,height, options);
 		World.add(world, this.body);
		

	}
	display()
	{
			
			var paperPos=this.body.position;		

			push()
			translate(paperPos.x, paperPos.y);
			rotate (this.body.angle);
			imageMode(CENTER)
			strokeWeight(4);
			fill(128,128,128)
			image(this.image,0,0,this.width, this.height);
			pop()
			
	}

}