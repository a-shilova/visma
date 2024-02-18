import { Container } from '@components/Container/Container'
import { FC } from 'react'
import styles from './Services.module.css'
import cx from 'classnames'
import { Typography } from '@components/Typography/Typography'
import { ServicesLink } from '@components/ServicesLink/ServicesLink'

type Props = {}

export const Services: FC<Props> = () => {
    return (
        <Container>
            <div className={cx(styles.block, 'flex flex-row justify-between')}>
                <div className={cx(styles.services, 'flex flex-col')}>
                    <Typography variant="heading-40b">Услуги</Typography>
                    <div className={cx(styles.servicesLinks, 'flex flex-col')}>
                        <ServicesLink
                            title={
                                <Typography
                                    variant="p-16"
                                    color="purple"
                                    decoration="dotted"
                                >
                                    Тарифы на услуги по обеспечению контроля
                                    доступа на территорию VISMA на 2022 год
                                </Typography>
                            }
                        />
                        <ServicesLink
                            title={
                                <Typography
                                    variant="p-16"
                                    color="purple"
                                    decoration="dotted"
                                >
                                    Условия определения цены договора и тарифы
                                    на работы
                                </Typography>
                            }
                        />
                        <ServicesLink
                            title={
                                <Typography
                                    variant="p-16"
                                    color="purple"
                                    decoration="dotted"
                                >
                                    Договор перевалки
                                    <br />
                                    (типовая форма)
                                </Typography>
                            }
                        />
                    </div>
                </div>
                <div
                    className={cx(
                        styles.servicesItems,
                        'grid grid-cols-2 gap-6'
                    )}
                >
                    <div className={cx(styles.service, 'flex flex-col')}>
                        <Typography variant="other-13b-ttu-ls10" color="white">
                            услуги
                        </Typography>
                        <Typography variant="heading-19b" color="white">
                            Хранение грузов
                        </Typography>
                    </div>
                    <div className={cx(styles.service, 'flex flex-col')}>
                        <Typography variant="other-13b-ttu-ls10" color="white">
                            услуги
                        </Typography>
                        <Typography variant="heading-19b" color="white">
                            Швартовые операции
                        </Typography>
                    </div>
                    <div className={cx(styles.service, 'flex flex-col')}>
                        <Typography variant="other-13b-ttu-ls10" color="white">
                            услуги
                        </Typography>
                        <Typography variant="heading-19b" color="white">
                            Складские операции
                        </Typography>
                    </div>
                    <div className={cx(styles.service, 'flex flex-col')}>
                        <Typography variant="other-13b-ttu-ls10" color="white">
                            услуги
                        </Typography>
                        <Typography variant="heading-19b" color="white">
                            Агентское обслуживание судов
                        </Typography>
                    </div>
                    <div className={cx(styles.service, 'flex flex-col')}>
                        <Typography variant="other-13b-ttu-ls10" color="white">
                            услуги
                        </Typography>
                        <Typography variant="heading-19b" color="white">
                            Буксировка / сопровождение судов
                        </Typography>
                    </div>
                    <div className={cx(styles.service, 'flex flex-col')}>
                        <Typography variant="other-13b-ttu-ls10" color="white">
                            услуги
                        </Typography>
                        <Typography variant="heading-19b" color="white">
                            Погрузочно-разгрузочная деятельность
                        </Typography>
                    </div>
                </div>
            </div>
        </Container>
    )
}
