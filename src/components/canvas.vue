<template>
<div class="canvas">
  <canvas></canvas>
  <div class="keyboard">
    <div class="key white-key la" style="--i: 1;"></div>
    <div class="key black sib" style="--i: 1;"></div>
    <div class="key white-key si" style="--i: 2;"></div>
    <div class="key white-key do" style="--i: 3;"></div>
    <div class="key black reb" style="--i: 3;"></div>
    <div class="key white-key re" style="--i: 4;"></div>
    <div class="key black mib" style="--i: 4;"></div>
    <div class="key white-key mi" style="--i: 5;"></div>
    <div class="key white-key fa" style="--i: 6;"></div>
    <div class="key black solb" style="--i: 6;"></div>
    <div class="key white-key sol" style="--i: 7;"></div>
    <div class="key black lab" style="--i: 7;"></div>
    <div class="key white-key la" style="--i: 8;"></div>
    <div class="key black sib" style="--i: 8;"></div>
    <div class="key white-key si" style="--i: 9;"></div>
    <div class="key white-key do" style="--i: 10;"></div>
    <div class="key black reb" style="--i: 10;"></div>
    <div class="key white-key re" style="--i: 11;"></div>
    <div class="key black mib" style="--i: 11;"></div>
    <div class="key white-key mi" style="--i: 12;"></div>
    <div class="key white-key fa" style="--i: 13;"></div>
    <div class="key black solb" style="--i: 13;"></div>
    <div class="key white-key sol" style="--i: 14;"></div>
    <div class="key black lab" style="--i: 14;"></div>
    <div class="key white-key la" style="--i: 15;"></div>
    <div class="key black sib" style="--i: 15;"></div>
    <div class="key white-key si" style="--i: 16;"></div>
    <div class="key white-key do" style="--i: 17;"></div>
    <div class="key black reb" style="--i: 17;"></div>
    <div class="key white-key re" style="--i: 18;"></div>
    <div class="key black mib" style="--i: 18;"></div>
    <div class="key white-key mi" style="--i: 19;"></div>
    <div class="key white-key fa" style="--i: 20;"></div>
    <div class="key black solb" style="--i: 20;"></div>
    <div class="key white-key sol" style="--i: 21;"></div>
    <div class="key black lab" style="--i: 21;"></div>
    <div class="key white-key la" style="--i: 22;"></div>
    <div class="key black sib" style="--i: 22;"></div>
    <div class="key white-key si" style="--i: 23;"></div>
    <div class="key white-key do" style="--i: 24;"></div>
    <div class="key black reb" style="--i: 24;"></div>
    <div class="key white-key re" style="--i: 25;"></div>
    <div class="key black mib" style="--i: 25;"></div>
    <div class="key white-key mi" style="--i: 26;"></div>
    <div class="key white-key fa" style="--i: 27;"></div>
    <div class="key black solb" style="--i: 27;"></div>
    <div class="key white-key sol" style="--i: 28;"></div>
    <div class="key black lab" style="--i: 28;"></div>
    <div class="key white-key la" style="--i: 29;"></div>
    <div class="key black sib" style="--i: 29;"></div>
    <div class="key white-key si" style="--i:30;"></div>
    <div class="key white-key do" style="--i: 31;"></div>
    <div class="key black reb" style="--i: 31;"></div>
    <div class="key white-key re" style="--i: 32;"></div>
    <div class="key black mib" style="--i: 32;"></div>
    <div class="key white-key mi" style="--i: 33;"></div>
    <div class="key white-key fa" style="--i: 34;"></div>
    <div class="key black solb" style="--i: 34;"></div>
    <div class="key white-key sol" style="--i: 35;"></div>
    <div class="key black lab" style="--i: 35;"></div>
    <div class="key white-key la" style="--i: 36;"></div>
    <div class="key black sib" style="--i: 36;"></div>
    <div class="key white-key si" style="--i: 37;"></div>
    <div class="key white-key do" style="--i: 38;"></div>
    <div class="key black reb" style="--i: 38;"></div>
    <div class="key white-key re" style="--i: 39;"></div>
    <div class="key black mib" style="--i: 39;"></div>
    <div class="key white-key mi" style="--i: 40;"></div>
    <div class="key white-key fa" style="--i: 41;"></div>
    <div class="key black solb" style="--i: 41;"></div>
    <div class="key white-key sol" style="--i: 42;"></div>
    <div class="key black lab" style="--i: 42;"></div>
    <div class="key white-key la" style="--i: 43;"></div>
    <div class="key black sib" style="--i: 43;"></div>
    <div class="key white-key si" style="--i: 44;"></div>
    <div class="key white-key do" style="--i: 45;"></div>
    <div class="key black reb" style="--i: 45;"></div>
    <div class="key white-key re" style="--i: 46;"></div>
    <div class="key black mib" style="--i: 46;"></div>
    <div class="key white-key mi" style="--i: 47;"></div>
    <div class="key white-key fa" style="--i: 48;"></div>
    <div class="key black solb" style="--i: 48;"></div>
    <div class="key white-key sol" style="--i: 49;"></div>
    <div class="key black lab" style="--i: 49;"></div>
    <div class="key white-key la" style="--i: 50;"></div>
    <div class="key black sib" style="--i: 50;"></div>
    <div class="key white-key si" style="--i: 51;"></div>
    <div class="key white-key do" style="--i: 52;"></div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    
    return {
      tiles: []
    }
  },
  methods: {},
  mounted() {
    const canvas = document.querySelector('canvas'),
    ctx = canvas.getContext('2d'),
    keys = document.querySelectorAll('.key'),
    keyboard = document.querySelector('.keyboard')
  },
}

/* const obj = {
  mounted() {
    const screenWidth = ref(screen.width)
    screenWidth.value = screenWidth
    var currentScreenWidth = window.innerWidth
    document.querySelector(".keyboard").style.marginLeft = `calc((${currentScreenWidth}px - 1280px) / 2)`
    window.addEventListener("resize", () => {
      currentScreenWidth = window.innerWidth
      document.querySelector(".keyboard").style.marginLeft = `calc((${currentScreenWidth}px - 1280px) / 2)`
    })
const canvas = document.querySelector("canvas"),
ctx = canvas.getContext("2d"),
keys = document.querySelectorAll(".key")
canvas.width = 1280
canvas.height = window.innerHeight

// Variables
var tiles = [],
tileX,
tileWidth = 13,
keyNumber

window.addEventListener("scroll", () => {
  tiles = []
})

class Tile {
    constructor (x, y, h, c) {
        this.x = x
        this.y = y
        this.h = h
        this.c = c
        this.position

        this.dh = 3
        this.dy = 0
    }

    Animate() {
            this.h += this.dh
            this.y += this.dy
        keys[keyNumber].addEventListener("mouseup", () => {
            this.dh = 0
            this.dy = 3
        })
        keys[keyNumber].addEventListener("mouseleave", () => {
            this.dh = 0
            this.dy = 3
        })
        this.Draw()
        if(canvas.getBoundingClientRect().bottom+this.h-this.y<-100) {
            tiles.splice(this.position, 1)
        }
    }

    Draw() {
        ctx.beginPath()
        ctx.fillStyle = this.c
        roundRect(ctx, this.x, this.y, tileWidth, this.h, this.c, tileWidth/3, true)
        ctx.closePath()
    }
}

function SpawnTile() {
    let c = ctx.createRadialGradient(tileX, tileX, tileX+100, tileX, tileX, 0)
    tiles.push(new Tile(tileX+(keys[keyNumber].offsetWidth-tileWidth)/2, 0, 0, c, 0))
}

function Update() {
    requestAnimationFrame(Update)
    ctx.clearRect(0,0,canvas.width, canvas.height)
    tiles.forEach((tile, i) => {
      tile.position = i
      tile.Animate()
    })
}

requestAnimationFrame(Update)

keys.forEach((key, i) => {
    key.addEventListener("mousedown", () => {
        tileX = key.getBoundingClientRect().left
        keyNumber = i
        SpawnTile()
    })
})


function roundRect(ctx, x, y, width, height, grd, radius, fill, stroke) {
    if (typeof stroke === 'undefined') {
      stroke = true
    }
    if (typeof radius === 'undefined') {
      radius = 5
    }
    if (typeof radius === 'number') {
      radius = {tl: radius, tr: radius, br: radius, bl: radius}
    } else {
      var defaultRadius = {tl: 0, tr: 0, br: 0, bl: 0}
      for (var side in defaultRadius) {
        radius[side] = radius[side] || defaultRadius[side]
      }
    }
    ctx.beginPath()
    ctx.moveTo(x + radius.tl, y)
    ctx.lineTo(x + width - radius.tr, y)
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius.tr)
    ctx.lineTo(x + width, y + height - radius.br)
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height)
    ctx.lineTo(x + radius.bl, y + height)
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bl)
    ctx.lineTo(x, y + radius.tl)
    ctx.quadraticCurveTo(x, y, x + radius.tl, y)
    grd.addColorStop(0, "black")
    grd.addColorStop(1, "blue")
    ctx.fillStyle = grd
    ctx.strokeStyle = "white"
    ctx.shadowColor = "white"
    ctx.shadowBlur = 20
    ctx.closePath()
    if (fill) {
      ctx.fill()
    }
    if (stroke) {
      ctx.stroke()
    }
}

document.querySelectorAll(".white-key").forEach(key => {
    key.style.background = `rgba(255,255,255,${2*Math.exp(-(44^2)/(2*22.08^2))})`
})
document.querySelectorAll(".white-key").forEach(key => {
    key.style.background = `rgba(255,255,255,${2*Math.exp(-(44^2)/(2*22.08^2))})`
})

window.addEventListener("scroll", () => {
    var h = document.documentElement, 
    b = document.body,
    st = 'scrollTop',
    sh = 'scrollHeight'

    var percent = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight)
    if(route.path === "/" || route.path === "/about") {
      document.querySelector("#about h1").style.opacity = 3*percent
    }
      document.querySelectorAll(".key").forEach((key) => {
        key.style.pointerEvents = window.scrollY !== 0 ? "none" : "auto"
        let keyI = getComputedStyle(key).getPropertyValue("--i")
        key.style.opacity = 1.5-3*percent-keyI/100
        key.style.marginTop = -50*percent*(50*Math.log(50/keyI))+"%"
    })
    document.documentElement.style.setProperty("--saberMargin", 3*percent)
    document.documentElement.style.setProperty("--saberOpacity", 2*percent)
})
  }
} */
</script>

<style lang="scss" scoped>
root {
  --saberMargin: 0;
  --saberOpacity: 1;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.canvas {
  height: 100%;
  width: 100%;
  background-color: #00001a;
  overflow: hidden;
}
canvas {
  background-color: #00001a;
  height: 75%;
  width: 100%;
}
.keyboard {
  position: relative;
  display: grid;
  grid-template-columns: repeat(52, calc(1280px / 52));
  grid-template-rows: 65% 35%;
  height: 25%;
  border-bottom: solid 1px black;
  background: #00001a;
  overflow: visible;
}
.keyboard::before {
  content: "";
  position: absolute;
  left: 0;
  top: -5px;
  width: 100%;
  height: 5px;
  background-color: #fff;
  box-shadow: 0 -1px 3px 1px #fff;
  border: royalblue 1px;
  z-index: 1000;
  margin-left: calc(var(--saberMargin) * 100vw);
  opacity: calc(1 - var(--saberMargin));
}
.keyboard::after {
  content: "";
  position: absolute;
  left: 0;
  top: -5px;
  width: 100%;
  height: 5px;
  background-color: rgba(60, 60, 255, 0.3);
  box-shadow: rgb(0, 60, 255) 0px 0px 16px 8px;
  z-index: 1000;
  animation: glow_animation 1s infinite;
  margin-left: calc(var(--saberMargin) * 100vw);
  opacity: calc(1 - var(--saberMargin));
}
@keyframes glow_animation {
  0%{
      transform: scaleY(1)
  }
  20%{
      transform: scaleY(1.1)
  }
  30%{
      transform: scaleY(1.2)
  }
  60%{
      transform: scaleY(1.05)
  }
  80%{
      transform: scaleY(1.1)
  }
  100%{
      transform: scaleY(1)
  }
}
.key {
  width: 100%;
  position: relative;
  grid-column: var(--i) / calc(var(--i) + 1);
  &:hover {
    cursor: pointer;
  }
}
.white-key {
  z-index: 900;
  background-color: white;
  height: 100%;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  grid-row: 1 / 3;
  border: solid 1px black;
}
.black {
  z-index: 901;
  background-color: rgb(29, 28, 28);
  height: 100%;
  width: calc(200% / 3);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  grid-row: 1 / 2;
}
.sib, .mib {
  margin-left: calc(100% / 3 + 400% / 9);
}
.reb, .solb {
  margin-left: calc(100% / 3 + 200% / 9);
}
.lab {
  margin-left: calc(200% / 3);
}
</style>