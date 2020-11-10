class Box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.Visiblity = 255;
      this.image = loadImage("box.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      
      if(this.body.speed<9){
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        fill(255);
        image(this.image,0, 0, this.width, this.height);
        pop();
      }
      else {
        World.remove(world, this.body);
        push();
        this.Visiblity = this.Visiblity - 5;
        tint(255, this.Visiblity);
        image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
      }
      }
      
      score() {
        if(this.Visiblity<8 && this.Visiblity >-105) {
          score++;
        }
      }

    }
    
  