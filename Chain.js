class Rope {
    constructor(body1, body2, offsetX, offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options = {
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.offsetX, y:this.offsetY}
        }
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }
    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;

        strokeWeight(4);

        Anchor1X = pointA.x;
        Anchor1Y = pointA.y;

        Anchor2X = pointB.x;
        Anchor2Y = pointB.y;

        fill(170, 169, 173);
        line(Anchor1X, Anchor, Anchor2X, Anchor2Y);
    }
}