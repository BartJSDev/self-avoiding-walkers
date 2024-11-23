function randomInt(min , max){

    return min + Math.floor(Math.random() * (max - min))
}

function random(min , max){

    return min + Math.random() * (max - min)
}

function make2DArray(rows, cols) {
    var arr = []
    for (var i = 0; i < rows; i++) {
        arr.push([])
        for (var j = 0; j < cols; j++) {
            arr[i][j] = 1
        }
    }

    return arr
}

function Getval(row, col, array) {

    if (array[row] === undefined) {

        return false
    }

    if (array[row][col] === undefined) {

        return false
    }

    return array[row][col]
}

function PickRandomSpot(array) {

    var r = Math.floor(Math.random() * rows)
    var c = Math.floor(Math.random() * cols)

    return [r, c]
}

function GetAdjacentSpots(row, col, array) {

    var spots = []

    if (Getval(row - 1, col, array) && Getval(row - 1, col, array) === 1) {

        spots.push([row - 1, col])
    }

    if (Getval(row + 1, col, array) && Getval(row + 1, col, array) === 1) {

        spots.push([row + 1, col])
    }

    if (Getval(row, col - 1, array) && Getval(row, col - 1, array) === 1) {

        spots.push([row, col - 1])
    }

    if (Getval(row, col + 1, array) && Getval(row, col + 1, array) === 1) {

        spots.push([row, col + 1])
    }

    return spots[Math.floor(Math.random() * spots.length)]
}
