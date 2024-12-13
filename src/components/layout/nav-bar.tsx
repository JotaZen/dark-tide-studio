'use client';

import useScroll from '@/hooks/ui/useScroll'
import mainRoutes from '@/routes/routes'
import {
    Button, Center, createListCollection, Flex
    , PopoverArrow, PopoverBody, PopoverContent, PopoverRoot, PopoverTrigger, Separator, Text
} from '@chakra-ui/react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React, { useTransition } from 'react'
import Link from 'next/link';
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation';
import { BsChevronDown } from 'react-icons/bs';

const NavBar = () => {

    const { isScrolled } = useScroll()
    const t = useTranslations()
    const locale = '/' + (Cookies.get('NEXT_LOCALE') || 'es') + '/'

    const [isPending, startTransition] = useTransition()
    const router = useRouter()

    const onLanguageChange = (value: string) => {
        startTransition(() => {
            router.replace(`/${value}`)
        })
        console.log(isPending)
    }

    return (
        <>

            {/* Barra de navegación */}
            <Flex
                // mt={-'lg'}
                top={0}
                left={0}
                w={'100%'}
                pos={'fixed'}
                padding={5}
                flex={1}

                bg={isScrolled ? 'white' : 'transparent'}
                style={{
                    zIndex: 1000,
                    transition: 'all 0.3s',
                }}
            >
                <Center flex={1}>
                    <Flex align={'center'}>
                        <Image
                            style={{
                                marginTop: '-0.5rem',
                            }}
                            src={'/logo.png'}
                            alt={'Logo'}
                            width={50}
                            height={50}
                        />
                        <Flex>
                            <Text
                                textAlign={'center'}
                                fontSize={'lg'}
                                color={isScrolled ? 'main.600' : 'white'}
                                style={{
                                    marginLeft: '.35rem',
                                    fontWeight: 'bolder',
                                }}
                                letterSpacing={'tight'}
                                m={0}
                            >
                                Dark
                            </Text>
                            <Text
                                textAlign={'center'}
                                fontSize={'lg'}
                                color={'main.500'}
                                style={{
                                    fontWeight: 'bolder',
                                }}
                                letterSpacing={'tight'}
                                m={0}
                            >
                                Tide
                            </Text>
                            <Text
                                textAlign={'center'}
                                fontSize={'lg'}
                                color={isScrolled ? 'main.600' : 'white'}
                                style={{
                                    fontWeight: 'bolder',
                                }}
                                letterSpacing={'tight'}
                                m={0}
                            >
                                Studio
                            </Text>
                        </Flex>
                    </Flex>
                    <Separator orientation={'vertical'} mx={10} height={'2rem'} borderColor={'main.500'} opacity={'.5'} />

                    <Flex gap={5}
                        color={
                            isScrolled ? 'main.500' : 'white'
                        }>
                        <Link href={locale + mainRoutes.home.path} locale={false}>
                            {t(mainRoutes.home.titleId)}
                        </Link>
                        <Link href={locale + mainRoutes.projects.path} locale={false}>
                            {t(mainRoutes.projects.titleId)}
                        </Link>
                        <Link href={locale + mainRoutes.aboutUs.path} locale={false}>
                            {t(mainRoutes.aboutUs.titleId)}
                        </Link>
                    </Flex>

                    <Separator orientation={'vertical'} mx={10} height={'2rem'} borderColor={'main.500'} opacity={'.5'} />
                    <Flex position="relative" >
                        <PopoverRoot
                            positioning={{
                                placement: 'bottom',

                            }}
                        >
                            <PopoverTrigger asChild>
                                <Button
                                    size="sm"
                                    variant="solid"
                                    colorPalette={isScrolled ? 'blue' : 'white'}
                                    height={'2.5rem'}
                                >
                                    <BsChevronDown />
                                    {t("general.language")}
                                </Button>
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
                </Center >

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