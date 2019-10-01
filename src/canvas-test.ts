import * as PIXI from 'pixi.js';

const WIDTH = 320;
const HEIGHT = 420;

const BLOCK_WIDTH = 26;
const BLOCK_HEIGHT = 30;

export class CanvasTest {
  private app: PIXI.Application;
  private gfx: PIXI.Graphics;

  constructor() {
    this.createApp();
    this.drawGrid();
  }

  private createApp() {
    this.app = new PIXI.Application({
      width: WIDTH,
      height: 480,
      backgroundColor: 0x000000,
      resolution: 1,
    });
    document.body.appendChild(this.app.view);
  }

  private drawGrid() {
    this.gfx = new PIXI.Graphics();
    this.gfx.beginFill(0x222222);

    let row = 0;
    for (let x = 4, y = BLOCK_HEIGHT * 2;; x += BLOCK_WIDTH * 2) {
      if (x > WIDTH - BLOCK_WIDTH) {
        row += 1;
        x = (row % 2 === 1 ? BLOCK_WIDTH : 0) + 4;
        y += BLOCK_HEIGHT;
      }
      if (y < HEIGHT) {
        this.gfx.drawRect(x, y, BLOCK_WIDTH, BLOCK_HEIGHT);
      } else {
        break;
      }
    }

    this.gfx.endFill();
    this.app.stage.addChild(this.gfx);
  }
}
