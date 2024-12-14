"use client"

import { Box, Card, Center, Flex, Stack, Text } from '@chakra-ui/react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';

export default function Page() {
    const t = useTranslations();
    const [clientLoaded, setClientLoaded] = useState(false)
    const [backgroundIndex, setBackgroundIndex] = useState(0);

    useEffect(() => {
        const i = setInterval(() => {
            setBackgroundIndex((prev) => {
                if (prev > 2) {
                    return 0;
                } else {
                    return prev + 1;
                }
            });
        }, 3000);

        setTimeout(() => {
            setClientLoaded(true);
        }, 100);

        return () => {
            clearInterval(i);
        }
    }, []);

    return (
        <Box
            pos={'relative'}
        >
            {/* Hero */}
            <Flex
                bg={'#0f0f0f'}
                h={'100dvh'}
                w={'100%'}
                p={0}

                style={{ position: 'relative' }}
                flex={1}
                boxShadow={'0rem -8rem 12rem 9rem #32aafa20'}
            >

                <Image
                    style={{
                        opacity: (backgroundIndex === 0 && clientLoaded) ? 1 : 0,
                        transition: 'opacity .5s',
                    }}
                    src={'/img/landing/hero1.png'}
                    alt={'Hero'}
                    layout={'fill'}
                    objectFit={'cover'}
                    objectPosition={'center'}
                />
                <Image
                    style={{
                        opacity: backgroundIndex === 1 ? 1 : 0,
                        transition: 'opacity .5s',
                    }}
                    src={'/img/landing/hero4.jpg'}
                    alt={'Hero'}
                    layout={'fill'}
                    objectFit={'cover'}
                    objectPosition={'top'}
                />
                <Image
                    style={{
                        opacity: backgroundIndex === 2 ? 1 : 0,
                        transition: 'opacity .5s',
                    }}
                    src={'/img/landing/hero3.jpg'}
                    alt={'Hero'}
                    layout={'fill'}
                    objectFit={'cover'}
                    objectPosition={'top'}
                />
                <Image
                    style={{
                        opacity: backgroundIndex === 3 ? 1 : 0,
                        transition: 'opacity .5s',
                    }}
                    src={'/img/landing/hero6.png'}
                    alt={'Hero'}
                    layout={'fill'}
                    objectFit={'cover'}
                    objectPosition={'top'}
                />

                {/* overlay */}
                <Box
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.6)',
                        zIndex: 1,
                    }}
                />



                <Stack flex={1} m={'0 auto'}>

                    <Flex
                        align={'center'}
                        justify={'center'}
                        flex={1}
                        zIndex={2}
                        gap={'7dvw'}
                    >
                        {/* 1 */}
                        <Stack align={'center'} justify={'start'} flex={1}>
                            {/* <Flex gap={0} align={'center'} justify={'start'} flex={1}>
                            <Image
                            src={'/logo.png'}
                            alt={'Logo'}
                            width={120}
                            height={120}
                            />
                            <Flex gap={0} align={'center'} mt={5}>
                            <Text
                            fontSize={'3xl'}
                            color={'white'}
                            style={{
                                fontWeight: 'bolder',
                                }}
                                letterSpacing={'tight'}
                                m={0}
                                >
                                Dark
                                </Text>
                                <Text
                                fontSize={'3xl'}
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
                                    fontSize={'3xl'}
                                    color={'white'}
                                    style={{
                                        fontWeight: 'bolder',
                                        }}
                                        letterSpacing={'tight'}
                                        m={0}
                                        >
                                        Studio
                                        </Text>
                                        
                                        </Flex>
                                        
                                        </Flex> */}

                            <Stack gap={0} pl={{
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
                                        mt={-5}
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
                                        mt={-5}
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
                                        mt={-5}
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
                                >
                                    {t('pages.home.quote_hero_1')}
                                </Text>
                                <Text
                                    fontSize={{
                                        base: '4xl',
                                        md: '5xl'
                                    }}
                                    color={'main.500'}
                                    style={{
                                        fontWeight: 'bolder',
                                    }}
                                    letterSpacing={'tight'}
                                    m={0}
                                    mt={-5}
                                >
                                    {t('pages.home.quote_hero_2')}
                                </Text>

                            </Stack>
                        </Stack >
                        {/* 2 */}
                        <Flex flex={1}>
                            {/* <Image
                            src={'/img/projects/sotd/visuals1.png'}
                            alt={'Hero'}
                            width={500}
                            height={500}
                            /> */}

                        </Flex >

                    </Flex >

                    <Center
                        zIndex={3}
                        pb={10}
                        color={'main.500'}
                        onClick={() => {
                            window.scrollTo({
                                top: window.innerHeight,
                                behavior: 'smooth'
                            });
                        }}
                        transition={'all 0.3s'}
                        _hover={{
                            color: 'white',
                            cursor: 'pointer'
                        }}
                    >
                        <BsChevronDown
                            size={50}
                        />
                    </Center>

                </Stack>
            </Flex >

            {/* Contenido */}


            <Center pt={150} bgColor={'gray.50'}>
                <Flex>

                    <Card.Root bgColor={'white'} color={'main.800'} border={0} boxShadow={'2xs'} flex={1}>
                        <Card.Body>
                            <Text>
                                {t('projects.sotd.title')}
                            </Text>
                        </Card.Body>
                    </Card.Root>
                </Flex>

            </Center>
        </Box >
    );
}