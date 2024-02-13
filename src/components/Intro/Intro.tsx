import { FC } from 'react'
import cx from 'classnames'
import styles from './Intro.module.css'
import { Typography } from '@components/Typography/Typography'
import { Container } from '@components/Container/Container'
import { Link } from 'react-router-dom'
import { ReactComponent as ArrowIcon } from './images/arrow.svg'

type Props = {}

export const Intro: FC<Props> = () => {
    return (
        <section
            className={cx(
                styles.block,
                'bg-right bg-no-repeat bg-center bg-cover'
            )}
        >
            <div className={cx(styles.container, "flex items-center justify-center h-full w-full")}>
                <div
                    className={cx(
                        styles.titleContainer,
                        'flex flex-col h-full'
                    )}
                >
                    <div className="flex flex-col gap-10">
                        <Typography variant="other-50b" color="white">
                            Тавимский морской порт VISMA
                        </Typography>
                        <div className={styles.subtitle}>
                            <Typography variant="p-16" color="white">
                                Vel posuere nibh odio placerat massa vel tellus
                                tortor. Varius eget nunc scelerisque etiam felis
                                facilisi ante viverra sem. Nunc eros elementum.
                            </Typography>
                        </div>
                    </div>
                    <Link
                        key="intro-about"
                        to={'/about'}
                        className={cx(
                            styles.buttonAbout,
                            'whitespace-nowrap flex items-center'
                        )}
                    >
                        <Typography variant="other-16b-ttu-ls10" color="white">
                            о компании
                        </Typography>
                        <ArrowIcon />
                    </Link>
                </div>

                <div className={cx(styles.services, 'grid grid-cols-2 gap-6')}>
                    <div className={cx(styles.service, 'flex flex-col')}>
                        <Typography variant="other-13b-ttu-ls10" color="white">
                            услуги
                        </Typography>
                        <Typography variant="heading-19b" color="white">
                            Погрузочно-разгрузочная
                            <br />
                            деятельность
                        </Typography>
                    </div>
                    <div className={cx(styles.service, 'flex flex-col')}>
                        <Typography variant="other-13b-ttu-ls10" color="white">
                            услуги
                        </Typography>
                        <Typography variant="heading-19b" color="white">
                            Хранение
                            <br />
                            грузов
                        </Typography>
                    </div>
                    <div className={cx(styles.service, 'flex flex-col')}>
                        <Typography variant="other-13b-ttu-ls10" color="white">
                            услуги
                        </Typography>
                        <Typography variant="heading-19b" color="white">
                            Складские
                            <br />
                            операции
                        </Typography>
                    </div>
                    <div className={cx(styles.service, 'flex flex-col')}>
                        <Typography variant="other-13b-ttu-ls10" color="white">
                            услуги
                        </Typography>
                        <Typography variant="heading-19b" color="white">
                            Швартовые
                            <br />
                            операции
                        </Typography>
                    </div>
                </div>
            </div>
        </section>
    )
}
