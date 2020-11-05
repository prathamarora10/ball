class Ground
{
    constructor(x,y)
    {
      var option = {
        isStatic: true
      }



        this.body = Bodies.rectangle(x,y,1000,20,option)
        World.add(world,this.body)
    }

      display()
      {

        var pos = this.body.position

        rectMode(CENTER)
        rect(pos.x,pos.y,1000,20)

      }

}




