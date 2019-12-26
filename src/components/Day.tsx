import React, { useState } from 'react'

import Input from './Input'
import Output from './Output';

interface IDayProps {
    logic: (input: string) => { part1: string | number, part2: string | number },
}

const Day: React.FC<IDayProps> = ({ logic }) => {
    const [input, setInput] = useState<string>("")

    return <>
        <Input input={input} setInput={setInput} />
        <Output input={input} logic={logic} />
    </>
}

export default Day
