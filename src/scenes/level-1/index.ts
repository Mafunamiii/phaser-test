import { GameObjects, Scene, Tilemaps } from 'phaser';
import { Player } from '../../classes/player';

export class Level1 extends Scene {
  private king!: GameObjects.Sprite;
  private player!: Player;

  private map!: Tilemaps.Tilemap;
  private tileset!: Tilemaps.Tileset;
  private wallsLayer!: Tilemaps.TilemapLayer;
  private groundLayer!: Tilemaps.TilemapLayer;

  constructor() {
    super('level-1-scene');
  }
  create(): void {
    console.log('level 1 (create): level-1');
    this.initMap();
    this.player = new Player(this, 100, 100);
  }
  update(): void {
    this.player.update();
  }
  private initMap(): void {
    // 1️⃣ Create the Tilemap FIRST
    this.map = this.make.tilemap({ key: 'dungeon', tileWidth: 16, tileHeight: 16 });
    console.log('Tilemap object:', this.map);

    // 2️⃣ Add Tileset Image
    this.tileset = this.map.addTilesetImage('dungeon', 'tiles')!;
    if (!this.tileset) {
      console.log('Tileset not found');
      throw new Error("Tileset 'dungeon' could not be loaded. Check if it's correctly preloaded.");
    }
    console.log('Tileset object:', this.tileset);
    console.log(
      'level 1 (initmap)',
      this.map.tilesets.map((t) => t.name),
    );
    console.log('Tilemap object:', this.map);
    console.log('Tilemap key:', this.cache.tilemap.exists('dungeon'));
    console.log(
      'Tilemap layers:',
      this.map.layers.map((l) => l.name),
    );
    console.log('Tilemap size:', this.map.widthInPixels, 'x', this.map.heightInPixels);

    console.log(
      'Map layers:',
      this.map.layers.map((l) => l.name),
    );
    console.log('Texture exists:', this.textures.exists('tiles'));

    this.groundLayer = this.map.createLayer('Ground', this.tileset, 0, 0)!;
    this.wallsLayer = this.map.createLayer('Walls', this.tileset, 0, 0)!;
    this.physics.world.setBounds(0, 0, this.wallsLayer.width, this.wallsLayer.height);
  }
}
