
import React from 'react'

import { Center, Flex, Separator, Stack, Text } from '@chakra-ui/react';

import NavBar from './nav-bar/nav-bar';

const Footer = () => {

    return <>
        <Center pt={20} bgColor={'white'} flexDir={'column'} gap={5} pb={10} flex={1} w={'100%'}>
            <Flex>

                {/* <Logo inverted />
                <Separator
                    orientation={'vertical'} mx={10} height={'2.5rem'} borderColor={'main.500'} opacity={'.5'}
                />
                <Link href={locale + mainRoutes.projects.path}>
                    <Text color={pathName === locale + mainRoutes.projects.path
                        ? 'main.500'
                        : 'gray.600'}
                    >
                        {t(mainRoutes.projects.titleId)}
                    </Text>
                </Link> */}
                <NavBar isScrolled={true} position='relative' />
            </Flex>
            <Stack mt={10} flex={1} w={'100%'} textAlign={'center'} >
                <Separator borderColor={'gray.100'} flex={1} maxW={'20rem'} margin={'0 auto'} />
                <Text
                    fontStyle={'italic'}
                    color={'gray.400'}
                    fontWeight={'300'}
                >
                    @2024 Dark Tide Studio
                </Text>
            </Stack>
        </Center>
    </>

}

export default Footer