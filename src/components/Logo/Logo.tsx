import { FC } from 'react'
import { ReactComponent as LogoIcon } from './images/logo.svg'

type Props = {}

export const Logo: FC<Props> = () => {
    return (
        <div className="flex">
            <LogoIcon />
        </div>
    )
}
