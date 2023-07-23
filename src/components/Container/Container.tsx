import { FC, PropsWithChildren } from 'react'
import cx from 'classnames'

import styles from './Container.module.css'

type Props = {
    className?: string
}

export const Container: FC<PropsWithChildren<Props>> = ({
    className,
    children,
}) => {
    return <div className={cx(styles.block, className)}>{children}</div>
}
