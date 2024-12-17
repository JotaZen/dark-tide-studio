"use client";

import mainRoutes from '@/routes/routes'
import {
    Button, createListCollection, Flex
    , PopoverArrow, PopoverBody, PopoverContent, PopoverRoot, PopoverTrigger, Separator, Text,
    useBreakpointValue
} from '@chakra-ui/react'
import { useTranslations } from 'next-intl'
import React, { useEffect, useState, useTransition } from 'react'
import Link from 'next/link';
import Cookies from 'js-cookie'
import { usePathname, useRouter } from 'next/navigation';
import { BsTranslate } from 'react-icons/bs';
import Logo from './logo'

const NavBar = ({
    isScrolled,
    position = 'fixed'
}: {
    isScrolled: boolean
    position?: 'fixed' | 'absolute' | 'relative'
}) => {

    const [clientLoaded, setClientLoaded] = useState(false)

    const t = useTranslations()
    const locale = '/' + (Cookies.get('NEXT_LOCALE') || 'es')

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [isPending, startTransition] = useTransition()
    const router = useRouter()
    const pathName = usePathname()

    const onLanguageChange = (value: string) => {
        Cookies.set('NEXT_LOCALE', value)
        const currentPath = pathName.replace(locale, '')
        startTransition(() => {
            router.replace(`/${value}` + currentPath)
        })
    }

    const isMobile = useBreakpointValue({
        base: true,
        md: false
    })

    useEffect(() => {
        setClientLoaded(true)
    }, [])

    const [open, setOpen] = useState(false)

    if (!clientLoaded) {
        return null
    }
    return (
        <>

            {/* Barra de navegación */}
            <Flex
                // mt={-'lg'}
                top={0}
                left={0}
                w={'100%'}
                pos={position}
                direction={'column'}
                flex={1}
                bg={isScrolled ? 'white' : 'transparent'}
                style={{
                    zIndex: 1000,
                    transition: 'all 0.3s',
                }}
                opacity={clientLoaded ? 1 : 0}
            >

                {/* <Flex
                    bgColor={'main.600'}
                    flex={1}
                    textAlign={'center'}
                    justify={'center'}
                    py={2}
                    color={'white'}
                    hidden={isScrolled}
                    className='marquee'
                >
                    <Text>
                        Pronto:&nbsp;<b>&quot;Sons Of The Depths&quot;</b>&nbsp;&nbsp;
                        <Link
                            style={{
                                textDecoration: 'underline',
                            }}
                            href={locale + mainRoutes.projects.path}
                        >
                            Ver más
                        </Link>
                    </Text>
                </Flex> */}

                <Flex
                    padding={5}
                    justify={'center'}
                    flex={1}
                    direction={{
                        base: 'column',
                        md: 'row'
                    }}>

                    <Logo inverted={isScrolled} />

                    <Separator
                        hidden={isMobile}
                        orientation={'vertical'} mx={10} height={'2.5rem'} borderColor={'main.500'} opacity={'.5'} />

                    <Flex gap={5}
                        align={'center'}
                        hidden={isMobile}
                    >
                        <Link href={locale + mainRoutes.home.path}>
                            <Text color={(pathName === locale + mainRoutes.home.path)
                                ? 'main.500'
                                : isScrolled ? 'gray.600' : 'gray.200'}
                            >
                                {t(mainRoutes.home.titleId)}
                            </Text>
                        </Link>
                        <Link href={locale + mainRoutes.projects.path}>
                            <Text color={pathName === locale + mainRoutes.projects.path
                                ? 'main.500'
                                : isScrolled ? 'gray.600' : 'gray.200'}
                            >
                                {t(mainRoutes.projects.titleId)}
                            </Text>
                        </Link>
                        <Link href={locale + mainRoutes.team.path}>
                            <Text color={(pathName === locale + mainRoutes.team.path)
                                ? 'main.500'
                                : isScrolled ? 'gray.600' : 'gray.200'}
                            >
                                {t(mainRoutes.team.titleId)}
                            </Text>
                        </Link>
                        <Link href={locale + mainRoutes.aboutUs.path}>
                            <Text color={(pathName === locale + mainRoutes.aboutUs.path)
                                ? 'main.500'
                                : isScrolled ? 'gray.600' : 'gray.200'}
                            >
                                {t(mainRoutes.aboutUs.titleId)}
                            </Text>
                        </Link>
                    </Flex>

                    <Separator hidden={isMobile}
                        orientation={'vertical'} mx={10} height={'2.5rem'} borderColor={'main.500'} opacity={'.5'} />

                    <Flex position="relative" hidden={isMobile}>
                        <PopoverRoot
                            positioning={{
                                placement: 'bottom',

                            }}
                            open={open}
                            onOpenChange={(e) => setOpen(e.open)}
                        >
                            <PopoverTrigger
                                as={Button}
                                colorPalette={isScrolled ? 'blue' : 'blue'}
                                height={'2.5rem'}
                            >
                                {t("general.language")}
                                <BsTranslate />
                            </PopoverTrigger>
                            <PopoverContent
                                position="absolute"
                                zIndex="popover"
                                w="auto"
                                top={'2.5rem'}
                                left={0}
                            >
                                <PopoverArrow />
                                <PopoverBody p={0} m={0} display={'flex'} flexDir={'column'}>
                                    {
                                        languages.items.map((item, index) => (
                                            <Button
                                                borderRadius={0}
                                                flex={1}
                                                m={0}
                                                px={10}
                                                py={5}
                                                key={index}
                                                variant="ghost"
                                                onClick={() => {
                                                    onLanguageChange(item.value)
                                                }}
                                            >
                                                {item.label}
                                            </Button>
                                        ))
                                    }
                                </PopoverBody>
                            </PopoverContent>
                        </PopoverRoot>
                    </Flex>
                </Flex >

            </Flex >
        </>
    )
}


const languages = createListCollection({
    items: [
        { label: "English", value: "en" },
        { label: "Español", value: "es" },
    ],
})
export default NavBar