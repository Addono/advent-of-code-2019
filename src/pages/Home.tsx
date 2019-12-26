import React from 'react'

import Day from '../components/Day'
import day01 from '../days/day01'

interface IHomeProps {
}

const days = {
    1: day01,
}

const Home: React.FC<IHomeProps> = () => (
    <>
        {
            Object.entries(days).map(([number, logic]) => (
                <>
                    <p>Day {number}:</p>
                    <Day key={`day${number}`} logic={logic} />
                </>
            ))
        }
    </>
)

export default Home
