import Hero from '@/components/layout/hero/hero'
import PageTitle from '@/components/layout/hero/page-title'
import { Badge, Box, Flex, HStack, Stack, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'


const Page = () => {
    return (
        <>
            <Hero
                height={'100dvh'}
                images={[


                ]}
            >
                <PageTitle
                    leftChildren={
                        <>
                            <Flex
                                flex={1}
                                align={{
                                    base: 'center',
                                    md: 'flex-end'
                                }}
                                justify={{
                                    base: 'flex-end',
                                    md: 'flex-start'
                                }}
                                h={'100%'}
                                pb={'10%'}
                                direction={{
                                    base: 'column',
                                    md: 'row'
                                }}
                            >
                                <Image
                                    alt='Jota Zen'
                                    src='/img/team/Jota.jpg'
                                    width={150}
                                    height={150}
                                    objectFit='cover'
                                    style={{
                                        margin: '0 2rem',
                                        borderRadius: '50%',
                                        boxShadow: '0 1rem 1rem 5px rgba(0,0,0,0.5)'
                                    }}
                                />
                                <Stack>
                                    <Flex>
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

                                        >
                                            Jota
                                        </Text>
                                        <Text
                                            fontSize={{
                                                base: '3xl',
                                                md: '5xl'
                                            }}
                                            color={'main.500'}
                                            style={{
                                                fontWeight: 'bolder',
                                            }}
                                            letterSpacing={'tight'}
                                            m={0}
                                        >
                                            Zen
                                        </Text>
                                    </Flex>
                                    <HStack>
                                        <Badge>Desarrollo</Badge>
                                        <Badge>Música</Badge>
                                    </HStack>
                                </Stack>
                            </Flex>
                        </>
                    }
                />

            </Hero >
            <Box
                boxShadow={'inset 0px 142px 120px -136px rgba(0,0,0,0.75)'}
                py={250}
                px={{
                    base: 5,
                    md: '15vw'
                }}
                bgColor={'gray.50'}
                zIndex={3}
            >

            </Box>
        </>
    )
}

export default Page