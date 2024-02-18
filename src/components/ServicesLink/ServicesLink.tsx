import { Typography } from '@components/Typography/Typography'
import { FC, ReactElement } from 'react'
import cx from 'classnames'
import styles from './ServicesLink.module.css'

type Props = {
    title: ReactElement
}

export const ServicesLink: FC<Props> = ({ title }) => {
    return (
        <div className={cx(styles.block, 'flex flex-row items-center justify-between')}>
            {title}
            <div className={cx(styles.pdf, 'flex flex-row items-center')}>
                <Typography variant="other-13b-ttu-ls10" color="white">
                    PDF
                </Typography>
            </div>
        </div>
    )
}
