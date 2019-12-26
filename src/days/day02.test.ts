import day02, { compute } from './day02'

test('compute maintains length', () => {
    const input = [1,0,0,0,99]
    expect(compute(input).length).toStrictEqual(input.length)
})

test('compute 1,0,0,0,99 becomes 2,0,0,0,99', () => {
    expect(compute([1,0,0,0,99])).toStrictEqual([2,0,0,0,99])
})

test('compute 2,3,0,3,99 becomes 2,3,0,6,99', () => {
    expect(compute([2,3,0,3,99])).toStrictEqual([2,3,0,6,99])
})

test('compute 2,4,4,5,99,0 becomes 2,4,4,5,99,9801', () => {
    expect(compute([2,4,4,5,99,0])).toStrictEqual([2,4,4,5,99,9801])
})

test('compute 1,1,1,4,99,5,6,0,99 becomes 30,1,1,4,2,5,6,0,99', () => {
    expect(compute([1,1,1,4,99,5,6,0,99])).toStrictEqual([30,1,1,4,2,5,6,0,99])
})
