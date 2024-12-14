"use client"

import Hero from '@/components/layout/hero/hero'
import { Box, Flex, Stack, Text } from '@chakra-ui/react'
import { useTranslations } from 'next-intl'
import React from 'react'

const Page = () => {

    const t = useTranslations()

    return (
        <>
            <Hero
                height={'55dvh'}
                images={[
                    {
                        src: '/img/projects/sotd/visuals1.png',
                        layout: 'fill',
                        objectFit: 'contain',
                        objectPosition: '50% top'
                    }
                ]}
            >
                <Stack flex={1} m={'0 auto'} >
                    <Flex
                        flex={1}
                        align={'center'}
                        zIndex={2}
                        gap={'50dvw'}
                    >
                        {/* 1 */}
                        <Stack align={'center'} justify={'start'} >

                            <Stack
                                gap={0}
                                pl={{
                                    base: 10,
                                    md: 20
                                }}>
                                <Flex>
                                    <Text
                                        fontSize={{
                                            base: 'md',
                                            md: 'xl'
                                        }}
                                        color={'gray.300'}
                                        style={{
                                            fontWeight: 'bolder',
                                        }}
                                        letterSpacing={'tight'}
                                        m={0}
                                        mt={-3}
                                    >
                                        Dark
                                    </Text>
                                    <Text
                                        fontSize={{
                                            base: 'md',
                                            md: 'xl'
                                        }}
                                        color={'main.500'}
                                        style={{
                                            fontWeight: 'bolder',
                                        }}
                                        letterSpacing={'tight'}
                                        m={0}
                                        mt={-3}
                                    >
                                        Tide
                                    </Text>
                                    <Text
                                        fontSize={{
                                            base: 'md',
                                            md: 'xl'
                                        }}
                                        color={'gray.300'}
                                        style={{
                                            fontWeight: 'bolder',
                                        }}
                                        letterSpacing={'tight'}
                                        m={0}
                                        mt={-3}
                                    >
                                        Studio
                                    </Text>
                                </Flex>

                                <Text
                                    fontSize={{
                                        base: '3xl',
                                        md: '5xl'
                                    }}
                                    color={'gray.200'}
                                    style={{
                                        fontWeight: 'bolder',
                                    }}
                                    letterSpacing={'tight'}
                                    m={0}
                                    mt={-3}
                                >
                                    {t('routes.projects.title')}
                                </Text>

                            </Stack>
                        </Stack >
                        {/* 2 */}
                        <Flex flex={1}>

                        </Flex >

                    </Flex >


                </Stack>
            </Hero >

            <Box py={700}>

            </Box>
        </>
    )
}

export default Page