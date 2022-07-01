export class Player {
  constructor(game) {
    this.game = game;
    this.keyBinds = game.keyBinds;
    this.width = 100;
    this.height = 91.3;
    this.x = 0;
    this.y = this.game.height - this.height;
    this.vy = 0; // vertical speed
    this.weight = 1;
    this.image = document.getElementById("player");
    this.speed = 0;
    this.maxspeed = 10;
  }
  update(input) {
    // horizontal speed
    this.x += this.speed;
    if (input.includes(this.keyBinds.right)) this.speed = this.maxspeed;
    else if (input.includes(this.keyBinds.left)) this.speed = -this.maxspeed;
    else this.speed = 0;
    if (this.x < 0) this.x = 0;
    if (this.x > this.game.width - this.width)
      this.x = this.game.width - this.width;
    // vertical speed
    if (input.includes(this.keyBinds.up) && this.onGround()) this.vy -= 30;
    this.y += this.vy;
    if (!this.onGround()) this.vy += this.weight;
    else this.vy = 0;
  }
  draw(context) {
    context.drawImage(
      this.image,
      0,
      0,
      this.width,
      this.height,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
  onGround() {
    return this.y >= this.game.height - this.height;
  }
}
