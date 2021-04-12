class sling{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB=pointB;
        this.sling2 = Constraint.create(options);
        World.add(world, this.sling2);
    }
    fly(){
        this.sling2.bodyA=null;
    }

    display(){
        if(this.sling2.bodyA){
        
        
        var pointA = this.sling2.bodyA.position;
        var pointB = this.pointB
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
    }
}