var canvas = document.querySelector("canvas")
var c = canvas.getContext("2d")

canvas.width = innerWidth * devicePixelRatio
canvas.height = innerHeight * devicePixelRatio

$("canvas").css("width", 100 + "%")
$("canvas").css("height", 100 + "%")
$("body").css("backgroundColor", "black")
$("body").css("margin", 0)
$("body").css("overflow", "hidden")

var spacing = 40

var grid = make2DArray(20,20)


var walker1 = new Walker("lime" , grid)
var walker2 = new Walker("orange" , grid)
var walker3 = new Walker("magenta" , grid)
var walker4 = new Walker("dodgerblue" , grid)
var walker5 = new Walker("#FFFFCC" , grid)

walker1.init()
walker2.init()
walker3.init()
walker4.init()
walker5.init()

RenderCanvas()


function DrawGrid(grid , offsetX , offsetY){

      //draw grid
     for (var i = 0; i < grid.length; i++) {
        for (var j = 0; j < grid[i].length; j++) {

            if (grid[i][j] !== 1) {

                c.beginPath()
                c.strokeStyle = grid[i][j]
                c.fillStyle = "black"
                c.arc(offsetX + j * spacing + spacing / 2, offsetY + i * spacing + spacing / 2, spacing / 3, 0, 2 * Math.PI)
                c.fill()
                c.stroke()
                c.closePath()

            }

        }
    } 

}


function RenderCanvas() {

    c.clearRect(0, 0, canvas.width, canvas.height)

    walker1.update()
    walker1.draw(spacing , spacing)

    walker2.update()
    walker2.draw(spacing , spacing)

    walker3.update()
    walker3.draw(spacing , spacing)

    walker4.update()
    walker4.draw( spacing , spacing)

    walker5.update()
    walker5.draw( spacing , spacing)

    DrawGrid(grid , spacing , spacing)
   
    setTimeout(RenderCanvas, 50)

}

