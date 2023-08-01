import { FC } from 'react'
import cx from 'classnames'

import styles from './Typography.module.css'

type TypographySize = '13' | '14' | '16' | '19' | '40' | '50'

type TypographyVariant =
    | 'p-16'
    | 'other-50b'
    | 'other-16b-ttu-ls10'
    | 'other-13b-ttu-ls10'
    | 'heading-19b'
    | 'heading-40b'
    | 'p-14r'

type TypographyColor = 'black' | 'white' | 'purple'

type TypographyWeight = '400' | '700'

type Props = {
    size?: TypographySize
    variant?: TypographyVariant
    color?: TypographyColor
    fontWeight?: TypographyWeight
    children: string
}

export const Typography: FC<Props> = ({
    size = '13',
    variant = 'p-16',
    color = 'black',
    fontWeight = '400',
    children,
}) => {
    return (
        <span
            className={cx(
                styles.block,
                styles[variant],
                styles[color],
                styles[`size${size}`],
                styles[`weight${fontWeight}`]
            )}
        >
            {children}
        </span>
    )
}
