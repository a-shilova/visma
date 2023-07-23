import { FC } from 'react'
import { Link } from 'react-router-dom'
import cx from 'classnames'
import styles from './Menu.module.css'
import { MenuItem } from '@components/MenuItem/MenuItem'

type Props = {}

const titles = [
    { title: 'О компании', link: '/about' },
    { title: 'Новости', link: '/news1' },
    { title: 'Новости', link: '/news2' },
    { title: 'Новости', link: '/news3' },
    { title: 'Новости', link: '/news4' },
    { title: 'Новости', link: '/news5' },
    { title: 'Новости', link: '/news6' },
]

export const Menu: FC<Props> = () => {
    return (
        <div className={cx(styles.block, 'flex flex-row justify-between')}>
            {titles.map(({ title, link }, index) => (
                <MenuItem title={title} link={link} index={index} />
            ))}
        </div>
    )
}
