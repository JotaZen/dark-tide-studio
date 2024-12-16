import Hero from '@/components/layout/hero/hero'
import PageTitle from '@/components/layout/hero/page-title'
import CoalGallery from '@/components/team/coal-charcoal/coal-gallery'
import { Box, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

const Page = () => {


    return (
        <>
            <Hero
                height={'100dvh'}
                images={[
                    {
                        src: '/img/team/coal-charcoal/lucifer1.jpg',
                        objectFit: 'cover',
                        objectPosition: 'right -15rem'
                    }
                ]}
            >
                <Box mt={'25dvh'} />
                <PageTitle
                    leftChildren={
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
                                Coal
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
                                Charcoal
                            </Text>
                        </Flex>
                    }
                    rightChildren={
                        <>
                            <Image
                                alt='Coal Charcoal'
                                src='/img/team/Coal.png'
                                width={300}
                                height={300}
                                objectFit='cover'
                                style={{
                                    borderRadius: '5%',
                                    boxShadow: '0 1rem 1rem 5px rgba(0,0,0,0.5)'
                                }}
                            />
                        </>
                    }
                />
                <Box pt={'100%'} zIndex={-1}>
                </Box>
            </Hero >
            <Box
                borderTop={'1px solid #32aafa50'}
                boxShadow={'0 0 10rem 1rem #32aafa'}
            >
            </Box>
            <Box
                py={200}
                px={{
                    base: 5,
                    md: '15vw'
                }}
                zIndex={3}
            >
                <CoalGallery />
            </Box>

        </>
    )
}

export default Page