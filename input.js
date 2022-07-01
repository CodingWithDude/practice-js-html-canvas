export class InputHandler {
  constructor(input) {
    this.keys = [];
    this.keyBinds = input.keyBinds;
    window.addEventListener("keydown", (e) => {
      if (
        (e.key === this.keyBinds.down ||
          e.key === this.keyBinds.up ||
          e.key === this.keyBinds.left ||
          e.key === this.keyBinds.right ||
          e.key === this.keyBinds.enter) &&
        this.keys.indexOf(e.key) === -1
      ) {
        this.keys.push(e.key);
      }
      console.log(e.key, this.keys);
    });
    window.addEventListener("keyup", (e) => {
      if (
        e.key === this.keyBinds.down ||
        e.key === this.keyBinds.up ||
        e.key === this.keyBinds.left ||
        e.key === this.keyBinds.right ||
        e.key === this.keyBinds.enter
      ) {
        this.keys.splice(this.keys.indexOf(e.key), 1);
      }
      console.log(e.key, this.keys);
    });
  }
}
