class Terrorista {
  constructor(xParam, SpeedParam) {
    this.x = xParam;
    this.y = 195;
    this.w = 60;
    this.h = 65;
    this.img = new Image();
    this.img.src = "./images/terrorista1.png";
    this.speed = SpeedParam;
  }
 
  drawTerrorista = () => {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  };

  moveTerrorista = () => {
    this.x = this.x - this.speed;
  };
}
