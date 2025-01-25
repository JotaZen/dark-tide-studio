import Hero from '@/components/layout/hero/hero'
import PageTitle from '@/components/layout/hero/page-title'
import CoalGallery from '@/components/team/coal-charcoal/coal-gallery'
import { Badge, Box, Flex, HStack, Stack, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

import ScrollButton from '@/components/ui/buttons/scroll-button'


export async function generateMetadata() {
    // const t = await getTranslations();

    return {
        title: "Coal Charcoal",
        description: "Ilustración y arte conceptual de Coal Charcoal.",
    }
}

// export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
//     const messages = await import(`../locales/${params.locale}.json`);

//     return {
//         title: messages.title,
//         description: messages.description,
//     };
// }

const Page = () => {

    return (
        <Box>
            <Hero
                height={'100dvh'}
                images={[
                    {
                        src: '/img/team/coal-charcoal/lucifer1.jpg',
                        objectFit: 'cover',
                        objectPosition: 'center 10%'
                    },
                    {
                        src: '/img/team/coal-charcoal/festo1.jpg',
                        objectFit: 'cover',
                        objectPosition: 'center 15%'
                    },
                    {
                        src: '/img/team/coal-charcoal/astarte.jpg',
                        objectFit: 'cover',
                        objectPosition: 'center'
                    },

                ]}
            >

                <PageTitle
                    leftPadding='5vw'
                    align='left'
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
                                pb={'5%'}
                                direction={{
                                    base: 'column',
                                    md: 'row'
                                }}
                            >
                                <Image
                                    alt='Coal Charcoal'
                                    src='/img/team/Coal.png'
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
                                            Coal
                                        </Text>
                                        <Text
                                            color={'main.500'}
                                            letterSpacing={'tight'}
                                            m={0}
                                            fontWeight={"bolder"}
                                            fontSize={{
                                                base: '3xl',
                                                md: '5xl'
                                            }}
                                            backgroundImage="linear-gradient(to right, var(--chakra-colors-main-200), var(--chakra-colors-main-600),var(--chakra-colors-main-200))"
                                            bgClip="text"
                                            display={"inline-block"}
                                            className="animated-gradient"
                                        >
                                            Charcoal
                                        </Text>
                                    </Flex>
                                    <HStack>
                                        <Badge>Ilustración</Badge>
                                        <Badge>Arte conceptual</Badge>
                                    </HStack>
                                </Stack>
                            </Flex>
                        </>
                    }
                />
                <ScrollButton />
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
                <CoalGallery />
            </Box>

        </Box>
    )
}

export default Page