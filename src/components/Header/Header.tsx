import { FC } from 'react'
import { Container } from 'components/Container/Container'
import { Menu } from '@components/Menu/Menu'
import { Logo } from '@components/Logo/Logo'
import { Search } from '@components/Search/Search'
import { Locale } from '@components/Locale/Locale'

type Props = {}

export const Header: FC<Props> = () => {
    return (
        <Container>
            <div className="flex flex-row justify-between py-10 w-full items-center">
                <Logo />
                <Menu />
                <Search />
                <Locale />
            </div>
        </Container>
    )
}
