import { FC } from 'react'
import { Dropdown } from '@components/Dropdown/Dropdown'
import { useLocale } from './useLocale'
import { ReactComponent as ArrowIcon } from './images/arrow.svg'
import { Typography } from '@components/Typography/Typography'

type Props = {}

export const Locale: FC<Props> = () => {
    const { state, onLocaleClick, toggleDropdown, activeItem, locales } =
        useLocale()

    return (
        <div className="flex flex-row items-center">
            <button
                className="flex flex-row gap-2.5 items-center"
                onClick={toggleDropdown}
            >
                <Typography fontWeight="700">{activeItem.title}</Typography>
                <ArrowIcon />
            </button>

            <Dropdown
                dropdown={state}
                items={locales}
                onItemClick={onLocaleClick}
            />
        </div>
    )
}
