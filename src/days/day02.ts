
export const compute = (input: number[]) => {
    let position = 0

    while (input[position] !== 99) {
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

const computeWithNounAndVerb = (input: number[], noun: number, verb: number) => {
    // Clone the array
    input = input.slice(0)

    // Set the noun and verb
    input[1] = noun
    input[2] = verb

    // Compute the output
    return compute(input)
}

const day02 = (input: string) => {
    // Read the input as numbers
    const opcodes = input.split(",").map(s => Number.parseInt(s))

    const part1 = computeWithNounAndVerb(opcodes, 12, 2)[0]
    
    let noun, verb
    let part2 = -1
    for (noun = 0; noun < 100; noun++) {
        for (verb = 0; verb < 100; verb++) {
            if (computeWithNounAndVerb(opcodes, noun, verb)[0] === 19690720) {
                part2 = noun * 100 + verb
                break;
            }
        }
    }

    return { part1, part2 }
}

export default day02
