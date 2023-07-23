import { FC } from 'react'
import styles from './Input.module.css'
import cx from 'classnames'

type Props = {}

export const Input: FC<Props> = () => {
    return (
        <input
            type="text"
            className={cx(styles.block, styles['border-color'], 'h-6 border-b')}
        />
    )
}
