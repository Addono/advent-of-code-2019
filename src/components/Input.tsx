import React from 'react'

interface IInputProps {
    id: string,
    input: string,
    setInput: (input: string) => void,
}

const Input: React.FC<IInputProps> = ({ id, input, setInput }) => (
    <textarea name={`input-${id}`} value={input} onChange={event => setInput(event.target.value)} />
)

export default Input
