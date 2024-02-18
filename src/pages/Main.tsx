import { Container } from '@components/Container/Container'

import { Intro } from '@components/Intro/Intro'
import { Services } from '@components/Services/Services'
import { FC } from 'react'

export const Main: FC = () => {
    return (
        <>
            <Intro />
            <Services />
        </>
    )
}
