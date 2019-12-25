import fs from "fs"

const fuelCost = (i: number) => Math.floor(i / 3) - 2

// Read the file
const input = fs.readFileSync("input.txt", "utf-8")
const lines = input.split("\n")

// Convert each line into an integer
const mass = lines.map(l => Number.parseInt(l))

// Convert mass to fuel consumption
const fuel = mass.map(fuelCost)

const totalPart1 = fuel.reduce((a, b) => a + b, 0)

console.log(`Solution for part 1:\n${totalPart1}\n`)

const recursiveFuel = fuel.map(f => {
    let delta = f
    let cost = f
    
    while (delta > 0) {
        delta = fuelCost(delta)
        cost += Math.max(0, delta)
    }

    return cost
})


const totalPart2 = recursiveFuel.reduce((a, b) => a + b, 0)

console.log(`Solution for part 1:\n${totalPart2}`)
