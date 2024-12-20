
import React from 'react'

import { Center, Flex, Separator, Stack, Text } from '@chakra-ui/react';


const Footer = ({
    navBar
}: {
    navBar: React.ReactNode
}) => {

    return <>
        <Center pt={20}
         bgColor={'gray.950'}
         className='glass-dark'
         flexDir={'column'} gap={5} pb={10} flex={1} w={'100%'}>
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
                {navBar}
            </Flex>
            <Stack mt={10} flex={1} w={'100%'} textAlign={'center'} >
                <Separator borderColor={'gray.500'} flex={1} maxW={'20rem'} margin={'0 auto'} />
                <Text
                    fontStyle={'italic'}
                    color={'gray.500'}
                    fontWeight={'300'}
                >
                    @2024 Dark Tide Studio
                </Text>
            </Stack>
        </Center>
    </>

}

export default Footer