import React from 'react'

interface IOutputProps {
    input: string,
    logic: (input: string) => { part1: string | number, part2: string | number },
}

const Output: React.FC<IOutputProps> = ({ input, logic }) => {
    if (input) {
        const {part1, part2} = logic(input)

        return <>
            <p>Part 1: {part1}</p>
            <p>Part 2: {part2}</p>
        </>
    } else {
        return <>
            <p>Set input</p>
        </>
    }
}

export default Output
