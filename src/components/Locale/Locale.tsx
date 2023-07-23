import { FC } from 'react'
import { Dropdown } from '@components/Dropdown/Dropdown'
import { MenuItem } from '@components/MenuItem/MenuItem'
import { useLocale } from './useLocale'
import { ReactComponent as ArrowIcon } from './images/arrow.svg'

type Props = {}

export const Locale: FC<Props> = () => {
    const { state, onLocaleClick, toggleDropdown, activeItem, locales } =
        useLocale()

    return (
        <div>
            <button
                className="flex flex-row gap-2.5 items-center"
                onClick={toggleDropdown}
            >
                <MenuItem
                    index={activeItem.index}
                    title={activeItem.title}
                    link={activeItem.link}
                />
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
