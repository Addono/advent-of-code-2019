import React, { useState } from 'react'

import Input from './Input'
import Output from './Output';

interface IDayProps {
    id: string, // Identifier for the current day
    logic: (input: string) => { part1: string | number, part2: string | number },
}

const Day: React.FC<IDayProps> = ({ id, logic }) => {
    const storageKey = `day.${id}`
    const [input, setInput] = useState<string>(localStorage.getItem(storageKey) ?? "")

    const updateInput = (input: string) => {
        setInput(input)
        localStorage.setItem(storageKey, input)
    }

    return <>
        <Input input={input} setInput={updateInput} id={id} />
        <Output input={input} logic={logic} />
    </>
}

export default Day
