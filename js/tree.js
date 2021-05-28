class tree{
	constructor(x,y){
		var options={
			isStatic:true
		}
		this.w=450;
		this.h=600;
		this.t=10;
		
		this.image=loadImage("images/tree.png")
		this.base =Bodies.rectangle(x,y,this.w,this.t,options)
		this.left =Bodies.rectangle(0,this.y-this.h/2,this.t,this.h,options)
		this.right=Bodies.rectangle(x+this.w/2,this.y-this.h/2,this.t,this.h,options)
		
		World.add(world, this.base)
		World.add(world, this.left)
		World.add(world, this.right);

	}
	display()
	{
			var pos=this.base.position;
			push()
			translate(pos.x, pos.y+10);
			fill(255)
			imageMode(CENTER);
			image(this.image, 0,-this.h/2,this.w, this.h)
			pop()
			
	}

}