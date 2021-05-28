class ground{
	constructor(){
		var options={
			isStatic:true
		}

		this.body=Bodies.rectangle(600,790,1200,20,options)
		this.width=1200
		this.height=20

		World.add(world,this.body)
	}

	display(){
		var pos=this.body.position
		push()
		rectMode(CENTER)
		fill(128,128,128)
		rect(pos.x,pos.y,this.width,this.height)
		pop()
	}

}