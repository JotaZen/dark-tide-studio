"use client";

import mainRoutes from '@/routes/routes'
import {
    Box,
    Flex,
    Separator, Text,
    useBreakpointValue
} from '@chakra-ui/react'
import { useTranslations } from 'next-intl'
import React, { useEffect, useRef, useState, useTransition } from 'react'
import Link from 'next/link';
import Cookies from 'js-cookie'
import { usePathname } from 'next/navigation';
import Logo from './logo'
import MenuDrawer from '../menu/menu-drawer';
import LanguageSelect from './language-select';

const NavBar = ({
    isScrolled,
    showMenu,
    position = 'fixed',
    setDrawerOpen
}: {
    isScrolled: boolean
    showMenu?: boolean
    position?: 'fixed' | 'absolute' | 'relative' | 'sticky'
    setDrawerOpen: (open: boolean) => void
}) => {

    const [clientLoaded, setClientLoaded] = useState(false)

    const t = useTranslations()
    const locale = '/' + (Cookies.get('NEXT_LOCALE') || 'es')

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [isPending, startTransition] = useTransition()

    const pathName = usePathname()



    const isMobile = useBreakpointValue({
        base: true,
        md: false
    })

    useEffect(() => {
        setClientLoaded(true)
    }, [])


    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    const previousPathname = useRef<string | null>(null);

    useEffect(() => {
        const currentPathname = pathName;

        if (previousPathname.current !== null && previousPathname.current !== currentPathname) {
            setIsDrawerOpen(false);
            setDrawerOpen(false);
        }

        previousPathname.current = currentPathname; // Actualiza el valor de la ruta anterior
    }, [pathName, setDrawerOpen]);

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
                style={{
                    zIndex: 1000,
                    transition: 'all 0.3s',
                }}
                opacity={(clientLoaded) ? 1 : 0}
                zIndex={1001}

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
                    py={5}
                    pl={5}
                    justify={{
                        base: 'space-around',
                        md: 'center'
                    }}
                    align={'center'}
                    flex={1}
                    transition={'all 0.2s'}
                    className={isScrolled ? 'glass-dark' : ''}
                    borderRadius={0}
                    // bg={isScrolled ? 'gray.950' : 'transparent'}
                    pr={isDrawerOpen ? '5rem' : 0}

                >
                    <Link href={locale + mainRoutes.home.path}>
                        <Logo />
                    </Link>

                    <Separator
                        hidden={isMobile}
                        orientation={'vertical'}
                        mx={10}
                        height={'2.5rem'}
                        borderColor={'main.500'}
                        opacity={'.5'}
                    />

                    <Flex gap={5}
                        align={'center'}
                        hidden={isMobile}
                    >
                        <Link href={locale + mainRoutes.home.path}>
                            <Text color={(pathName === locale + mainRoutes.home.path)
                                ? 'main.500'
                                : isScrolled ? 'gray.100' : 'gray.200'}
                            >
                                {t(mainRoutes.home.titleId)}
                            </Text>
                        </Link>
                        <Link href={locale + mainRoutes.projects.path}>
                            <Text color={pathName === locale + mainRoutes.projects.path
                                ? 'main.500'
                                : isScrolled ? 'gray.100' : 'gray.200'}
                            >
                                {t(mainRoutes.projects.titleId)}
                            </Text>
                        </Link>
                        <Link href={locale + mainRoutes.team.path}>
                            <Text color={(pathName === locale + mainRoutes.team.path)
                                ? 'main.500'
                                : isScrolled ? 'gray.100' : 'gray.200'}
                            >
                                {t(mainRoutes.team.titleId)}
                            </Text>
                        </Link>

                    </Flex>

                    <Separator hidden={isMobile}
                        orientation={'vertical'} mx={10} height={'2.5rem'} borderColor={'main.500'} opacity={'.5'} />

                    <Flex position="relative" hidden={isMobile}>
                        <LanguageSelect />
                    </Flex>


                    <Box ml={3} hidden={!showMenu}>
                        <MenuDrawer
                            open={isDrawerOpen}
                            setOpen={(e) => {
                                setDrawerOpen(e)
                                setIsDrawerOpen(e)
                            }}
                        />
                    </Box>
                </Flex >
            </Flex >

        </>
    )
}



export default NavBar