import { useTranslations } from 'next-intl'
import React from 'react'
import Cookies from 'js-cookie'
import Link from 'next/link'
import { Stack, Text } from '@chakra-ui/react'
import mainRoutes from '@/routes/routes'
import { usePathname } from 'next/navigation'

const MenuLinksAll = () => {


    const t = useTranslations()
    const locale = '/' + (Cookies.get('NEXT_LOCALE') || 'es')
    const pathName = usePathname()

    return (
        <Stack p={5} >

            <Link href={locale + mainRoutes.home.path}>
                <Text color={(pathName === locale + mainRoutes.home.path)
                    ? 'main.500'
                    : 'gray.100'}

                >
                    {t(mainRoutes.home.titleId)}
                </Text>
            </Link>
            <Link href={locale + mainRoutes.projects.path}>
                <Text color={(pathName === locale + mainRoutes.projects.path)
                    ? 'main.500'
                    : 'gray.100'}

                >
                    {t(mainRoutes.projects.titleId)}
                </Text>
            </Link>
            <Link href={locale + mainRoutes.team.path}>
                <Text color={(pathName === locale + mainRoutes.team.path)
                    ? 'main.500'
                    : 'gray.100'}

                >
                    {t(mainRoutes.team.titleId)}
                </Text>
            </Link>
        </Stack>
    )
}

export default MenuLinksAll