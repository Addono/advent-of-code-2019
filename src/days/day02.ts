
export const compute = (input: number[]) => {
    let position = 0

    while (input[position] != 99) {
        const [x, y, target] = input.slice(position + 1, position + 4)

        switch (input[position]) {
            case 1:
                input[target] = input[x] + input[y]
                break

            case 2:
                input[target] = input[x] * input[y]
                break
        }

        position += 4
    }

    return input
}

const day02 = (input: string) => {
    // Read the input as numbers
    const opcodes = input.split(",").map(s => Number.parseInt(s))

    const programAlarm1202Input = opcodes
    programAlarm1202Input[1] = 12
    programAlarm1202Input[2] = 2

    const part1 = compute(programAlarm1202Input)[0]
    const part2 = 0

    return { part1, part2 }
}

export default day02
