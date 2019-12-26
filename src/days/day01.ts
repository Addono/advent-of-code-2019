
const day01 = (input: string) => {
    const fuelCost = (i: number) => Math.floor(i / 3) - 2

    const lines = input.split("\n")

    // Convert each line into an integer
    const mass = lines.map(l => Number.parseInt(l))

    // Convert mass to fuel consumption for first iteration
    const fuel = mass.map(fuelCost)

    // Recursively add fuel for additional weight of the fuel itself
    const recursiveFuel = fuel.map(f => {
        let delta = f
        let cost = f

        while (delta > 0) {
            delta = fuelCost(delta)
            cost += Math.max(0, delta)
        }

        return cost
    })

    // Compute the total weights for both parts
    const part1 = fuel.reduce((a, b) => a + b, 0)
    const part2 = recursiveFuel.reduce((a, b) => a + b, 0)

    return {part1, part2}
}

export default day01
