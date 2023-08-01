import { FC } from 'react'
import { ReactComponent as LenseIcon } from './images/lense.svg'
import { Input } from '@components/Input/Input'

type Props = {}

export const Search: FC<Props> = () => {
    return (
        <div className="flex items-end">
            <LenseIcon className="mr-5 w-6 h-6" />
            <Input />
        </div>
    )
}
