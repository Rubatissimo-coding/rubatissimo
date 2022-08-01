const ctx2 = canvas.getContext("2d")
let particles = []
function Particle(x, y, r, gradient) {
  this.x = x
  this.y = y
  this.r = r
  this.gradient = gradient

  this.dx
  this.dy

  this.draw = function () {
    ctx2.beginPath()
    ctx2.arc(x, y, r, gradient)
  }
  this.animate = function () {
    x += this.dx
    y += this.dy

    this.draw()
  }
}

function Update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  for (let i of chosenNotes) {
    i.animate()
  }
  requestAnimationFrame(Update)
}
Update()
