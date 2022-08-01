import { roundRect } from "./roundRect"

export class Tile {
  constructor(ctx, tileOptions) {
    this.ctx = ctx

    this.x = tileOptions.x
    this.y = tileOptions.y
    this.height = tileOptions.height
    this.width = window.innerWidth / 88
    this.color = tileOptions.color

    this.dh = 2
    this.dy = 0

    this.position = null
  }

  spawn(ctx, tiles, tileOptions) {
    let color = ctx.createRadialGradient()
    tiles = [...tiles, new Tile(ctx, tileOptions)]
  }

  draw() {
    this.ctx.beginPath()
    this.ctx.fillStyle = this.color
    const rectOptions = {
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height,
      color: this.color,
      radius: this.width / 3,
      fille: true
    }
    roundRect(this.ctx, rectOptions)
    this.ctx.closePath()
  }

  animate(tiles, keys, keyNumber) {
    this.height += this.dh
    this.y += this.dy

    keys[keyNumber].addEventListener("mouseup", () => {
      this.dh = 0
      this.dy = 2
    })

    keys[keyNumber].addEventListener("mouseleave", () => {
      this.dh = 0
      this.dy = 2
    })

    this.draw(canvas)
    if (canvas.getBoundingClientRect().bottom + this.height - this.y <= 100)
      tiles.splice(this.position, 1)
  }

  update(tiles, keys, keyNumber) {
    requestAnimationFrame(this.update)
    this.ctx.clearRect(0, 0, canvas.width, canvas.height)
    tiles.forEach((tile, index) => {
      this.position = index
      tile.animate(keys, keyNumber)
    })
  }
}
