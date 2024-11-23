var canvas = document.querySelector("canvas")
var c = canvas.getContext("2d")

canvas.width = innerWidth * devicePixelRatio
canvas.height = innerHeight * devicePixelRatio

$("canvas").css("width", 100 + "%")
$("canvas").css("height", 100 + "%")
$("body").css("backgroundColor", "black")
$("body").css("margin", 0)
$("body").css("overflow", "hidden")

var rows = 25
var cols = 25
var spacing = 60
var grid = make2DArray(rows, cols)

var walker1 = new Walker("lime")
var walker2 = new Walker("orange")
var walker3 = new Walker("magenta")

walker1.init()
walker2.init()
walker3.init()


RenderCanvas()

function RenderCanvas() {

    c.clearRect(0, 0, canvas.width, canvas.height)

    walker1.update()
    walker1.draw()

    walker2.update()
    walker2.draw()

    walker3.update()
    walker3.draw()

    //draw grid
    for (var i = 0; i < grid.length; i++) {
        for (var j = 0; j < grid[i].length; j++) {

            if (grid[i][j] !== 1) {

                c.beginPath()
                c.strokeStyle = grid[i][j]
                c.fillStyle = grid[i][j]
                c.arc(spacing + j * spacing + spacing / 2, spacing + i * spacing + spacing / 2, spacing / 5, 0, 2 * Math.PI)
                c.fill()
                c.stroke()
                c.closePath()

            }

        }
    }

    setTimeout(RenderCanvas, 23)

}

