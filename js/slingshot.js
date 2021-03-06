class slingshot{
    constructor(bodyA,pointB){

        var options={
            bodyA:bodyA,
            pointB:pointB,
            length:10,
            stiffness:0.04
        }

        this.sling=Constraint.create(options)
        this.pointB = pointB

        World.add(world,this.sling)

    }

    attach(body){
        this.sling.bodyA=body
    }

    fly(){
        this.sling.bodyA=null
    }


    

    
    display(){

        if (this.sling.bodyA){

        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;

        push()
        strokeWeight(5);
        stroke("orange")
        line(pointA.x,pointA.y,pointB.x,pointB.y)
        pop()
        }
    }
}