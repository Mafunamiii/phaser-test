import { GameObjects, Scene } from 'phaser';
export class Level1 extends Scene {
  private king!: GameObjects.Sprite;

  constructor() {
    super('level-1-scene');
  }
  create(): void {
    console.log('level-1');
    this.king = this.add.sprite(100, 100, 'king');
  }
}
