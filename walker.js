class Walker {

    constructor(color) {

        this.color = color;
        this.path = []
        this.current = PickRandomSpot(grid)
        this.finished = false

    }

    init() {

        grid[this.current[0]][this.current[1]] = this.color
        this.path.push(this.current)
    }

    update() {

        if (!this.finished) {

            if (this.current) {

                var next = GetAdjacentSpots(this.current[0], this.current[1], grid)

                if (next) {

                    grid[next[0]][next[1]] = this.color
                    this.path.push(next)
                    this.current = next

                } else {

                    if (this.path.length > 0) {

                        this.path.pop()
                        this.current = this.path[this.path.length - 1]

                    }
                }
            }


            if (this.path.length === 0) {

                console.log("we are done")
                this.finished = true
            }
        }


    }

    draw() {

        if (this.path.length > 0) {

            c.save()
            c.beginPath()
            c.strokeStyle = this.color
            c.lineWidth = spacing / 10

            for (var i = 0; i < this.path.length; i++) {

                if (i === 0) {

                    c.moveTo(spacing + this.path[i][1] * spacing + spacing / 2, spacing + this.path[i][0] * spacing + spacing / 2)

                } else {

                    c.lineTo(spacing + this.path[i][1] * spacing + spacing / 2, spacing + this.path[i][0] * spacing + spacing / 2)


                }

            }

            c.stroke()
            c.closePath()
            c.restore()

        }
    }
}