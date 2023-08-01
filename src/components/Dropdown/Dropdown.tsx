import { MenuItem } from '@components/MenuItem/MenuItem'
import { FC } from 'react'
import styles from './Dropdown.module.css'
import cx from 'classnames'

type Props = {
    items: {
        title: string
        link: string
        index: number
    }[]
    dropdown: boolean
    onItemClick: (i?: number) => void
}

export const Dropdown: FC<Props> = ({ items, dropdown, onItemClick }) => {
    return (
        <ul
            className={cx({
                [styles.hidden]: !dropdown,
                [styles.shown]: dropdown,
            })}
        >
            {items.map(({ title, link, index }) => (
                <MenuItem
                    title={title}
                    link={link}
                    onItemClick={onItemClick}
                    index={index}
                />
            ))}
        </ul>
    )
}
