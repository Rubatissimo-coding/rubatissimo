export function roundRect(ctx, options) {
  let { x, y, width, height, gradient, radius, fill, stroke } = options
  if (typeof stroke === "undefined") stroke = true
  if (typeof radius === "undefined") radius = 5
  if (typeof radius === "number")
    radius = {
      top_left: radius,
      top_right: radius,
      bottom_right: radius,
      bottom_left: radius
    }
  else
    radius = {
      top_left: radius.top_left || 0,
      top_right: radius.top_right || 0,
      bottom_right: radius.bottom_right || 0,
      bottom_left: radius.bottom_left || 0
    }

  ctx.beginPath()
  ctx.moveTo(x + radius.top_left, y)
  ctx.lineTo(x + width - radius.top_right, y)
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius.top_right)
  ctx.lineTo(x + width, y + height - radius.bottom_right)
  ctx.quadraticCurveTo(
    x + width,
    y + height,
    x + width - radius.bottom_right,
    y + height
  )
  ctx.lineTo(x + radius.bottom_left, y + height)
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bottom_left)
  ctx.lineTo(x, y + radius.top_left)
  ctx.quadraticCurveTo(x, y, x + radius.top_left, y)
  ctx.addColorStop(0, "black")
  ctx.addColorStop(1, "blue")
  ctx.fillStyle = gradient
  ctx.strokeStyle = "white"
  ctx.shadowColor = "white"
  ctx.shadowBlur = 20
  ctx.closePath()
  if (fill) ctx.fill()
  if (stroke) ctx.stroke()
}
