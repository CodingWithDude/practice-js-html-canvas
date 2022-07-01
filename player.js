import { Sitting, Running, Jumping, Falling } from "./playerStates.js";

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
    this.frameX = 0;
    this.frameY = 0;
    this.speed = 0;
    this.maxspeed = 10;
    this.states = [
      new Sitting(this),
      new Running(this),
      new Jumping(this),
      new Falling(this),
    ];
    this.currentState = this.states[0];
    this.currentState.enter();
  }
  update(input) {
    this.currentState.handleInput(input);
    // horizontal speed
    this.x += this.speed;
    if (input.includes(this.keyBinds.right)) this.speed = this.maxspeed;
    else if (input.includes(this.keyBinds.left)) this.speed = -this.maxspeed;
    else this.speed = 0;
    if (this.x < 0) this.x = 0;
    if (this.x > this.game.width - this.width)
      this.x = this.game.width - this.width;
    // vertical speed
    this.y += this.vy;
    if (!this.onGround()) this.vy += this.weight;
    else this.vy = 0;
  }
  draw(context) {
    context.drawImage(
      this.image,
      this.frameX * this.width,
      this.frameY * this.height,
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
  setState(state) {
    this.currentState = this.states[state];
    this.currentState.enter();
  }
}
