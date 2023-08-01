import { Typography } from '@components/Typography/Typography'
import { FC, useCallback } from 'react'
import { Link } from 'react-router-dom'

type MenuItemProps = {
    title: string
    link: string
    index: number
    onItemClick?: (i?: number) => void
}
export const MenuItem: FC<MenuItemProps> = ({
    title,
    link,
    onItemClick,
    index,
}) => {
    const onClick = useCallback(() => {
        onItemClick && onItemClick(index)
    }, [index])

    return (
        <div className="flex break-keep">
            <Link
                key={`${title}_${index}`}
                to={link}
                className="whitespace-nowrap"
                onClick={onClick}
            >
                <Typography>{title}</Typography>
            </Link>
        </div>
    )
}
