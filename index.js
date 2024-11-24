var canvas = document.querySelector("canvas")
var c = canvas.getContext("2d")

canvas.width = innerWidth * devicePixelRatio
canvas.height = innerHeight * devicePixelRatio

$("canvas").css("width", 100 + "%")
$("canvas").css("height", 100 + "%")
$("body").css("backgroundColor", "black")
$("body").css("margin", 0)
$("body").css("overflow", "hidden")

var spacing = 20
var counter = 25
var grid = make2DArray(50,50)
var walkers = []

CreateWalkers()

RenderCanvas()

function CreateWalkers(){

    for(var i = 0 ; i < counter ; i++){

        var walker = new Walker("hsl(" + randomInt(0,360) + ", 100%,50%)" , grid)
        walker.init()
        walkers.push(walker)
    }
}

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

    walkers.forEach(walker => {

        walker.update()
        walker.draw(spacing , spacing)
    })

    DrawGrid(grid , spacing , spacing)
   
    setTimeout(RenderCanvas, 50)

}

