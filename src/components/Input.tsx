import React from 'react'

interface IInputProps {
    input: string,
    setInput: (input: string) => void,
}

const Input: React.FC<IInputProps> = ({ input, setInput }) => (
    <textarea name={"input"} value={input} onChange={event => setInput(event.target.value)} />
)

export default Input
