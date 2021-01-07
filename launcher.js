class launcher{
    constructor(body, any){
        var option={
            bodyA: body,
            pointB: any,
            stiffness: 0.004,
            length: 1
}
        
        this.bodyA=body
            this.pointB=any;
            this.launcher=Constraint.create(option)
            World.add(world,this.launcher)
        }
    
        attach(body)
        {this.launcher.bodyA=body; }
    
        fly()
        { this.launcher.bodyA=null;}
    
        display()
        {
            if(this.launcher.bodyA)
            {
               strokeWeight(2);
                var pointA=this.bodyA.position;
                var pointB=this.pointB;		
                line(pointA.x,pointA.y,pointB.x,pointB.y);
            }
        }
    }
    
    