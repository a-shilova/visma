import { useState, useCallback, useEffect } from 'react'

const locales = [
    { title: 'RU', link: '#', index: 0 },
    { title: 'EN', link: '#', index: 1 },
]

type LocaleItem = {
    title: string
    link: string
    index: number
}

export const useLocale = () => {
    const [dropdown, setDropdown] = useState(false)
    const [activeItem, setActiveItem] = useState<LocaleItem>(locales[0])

    const getNewLocales = useCallback(
        (i: number) => {
            return locales
                .slice(0, i)
                .concat(locales.slice(i + 1, locales.length))
        },
        [locales]
    )

    const [listLocales, setListLocales] = useState<LocaleItem[]>(
        getNewLocales(0)
    )

    const toggleDropdown = useCallback(() => {
        setDropdown((prev) => !prev)
    }, [dropdown])

    const onLocaleClick = useCallback(
        (i?: number) => {
            const index = i ?? 0
            setDropdown(false)
            setActiveItem(locales[index])
            setListLocales(getNewLocales(index))
        },
        [locales, toggleDropdown]
    )

    return {
        locales: listLocales,
        onLocaleClick,
        activeItem,
        state: dropdown,
        toggleDropdown,
    }
}
