import React, { Fragment } from 'react'

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
                <Fragment key={number}>
                    <p>Day {number}:</p>
                    <Day id={number} logic={logic} />
                </Fragment>
            ))
        }
    </>
)

export default Home
