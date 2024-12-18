"use client"

import Overlay from '@/components/ui/bg/overlay';
import { getLocation } from '@/helpers/routesHelper';
import mainRoutes from '@/routes/routes';
import { Box, Button, Card, Center, Flex, GridItem, Separator, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { BsChevronDown, BsChevronRight } from 'react-icons/bs';

export default function Page() {
    const t = useTranslations();
    const [clientLoaded, setClientLoaded] = useState(false)
    const [backgroundIndex, setBackgroundIndex] = useState(0);

    useEffect(() => {
        const i = setInterval(() => {
            setBackgroundIndex((prev) => {
                if (prev > 4) {
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
        <Box>
            {/* Hero */}
            <Flex
                bg={'#0f0f0f'}
                h={'100dvh'}
                w={'100%'}
                p={0}

                style={{ position: 'relative' }}
                flex={1}
                zIndex={1}
                boxShadow={'0rem -8rem 12rem 14rem rgb(7, 25, 37)'}
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
                        opacity: backgroundIndex === 4 ? 1 : 0,
                        transition: 'opacity .5s',
                    }}
                    src={'/img/landing/hero6.png'}
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
                    src={'/img/landing/hero3.jpg'}
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
                    src={'/img/projects/sotd/concept/muelle.jpg'}
                    alt={'Hero'}
                    layout={'fill'}
                    objectFit={'cover'}
                    objectPosition={'center'}
                />
                <Image
                    style={{
                        opacity: backgroundIndex === 5 ? 1 : 0,
                        transition: 'opacity .5s',
                    }}
                    src={'/img/projects/sotd/concept/cat_inter.jpg'}
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


            {/* <Center py={220} bgColor={'gray.50'}>
                <Card.Root
                    bgColor={'main.800'}
                    px={10}
                    color={'gray.100'} border={0} boxShadow={'2xs'} maxWidth={{
                        base: '95%',
                        md: '80%',
                        lg: '70%',
                    }}>
                    <Card.Body mt={-20}>
                        <SimpleGrid columns={{
                            base: 1,
                            md: 2
                        }}>
                            <GridItem
                                colSpan={{
                                    base: 1,
                                    md: 1
                                }}
                                px={4}
                                pb={10}
                            >

                            </GridItem>
                            <GridItem
                                position={'relative'}
                                colSpan={1}
                                px={10}
                                justifyContent={'center'}
                                justifyItems={'center'}
                            >
                                <Center
                                    position="relative"
                                    overflow="visible"
                                >
                                    <Image
                                        src={'/img/projects/sotd/concept/visuals1.png'}
                                        alt={'Hero'}
                                        objectFit={'cover'}
                                        objectPosition={'top'}
                                        width={'10000'}
                                        height={800}
                                    />
                                </Center>
                                <Center mt={10} pb={5}>
                                    <Link
                                        style={{
                                            textDecoration: 'underline',

                                        }}
                                        href={getLocation() + mainRoutes.projects.path}
                                    >
                                        <Button
                                            colorScheme={'main'}
                                            size={'lg'}
                                            px={10}
                                        >
                                            <BsChevronRight />
                                            Ver más
                                        </Button>
                                    </Link>
                                </Center>
                            </GridItem>

                        </SimpleGrid>
                    </Card.Body>
                </Card.Root>
            </Center> */}
            <Separator borderColor={'dark'} zIndex={3} />



            <Center
                flexDir={'column'}
                position={'relative'}
                width={'100%'}
                height={'100dvh'}
                objectFit={'cover'}
            >

                <Image
                    src={'/img/projects/sotd/concept/1.jpg'}
                    alt={'Hero Image 2'}
                    layout={'fill'}
                    objectFit={'cover'}
                    objectPosition={'bottom'}

                />
                <Overlay />
                <Flex flex={1}></Flex>
                <Card.Root
                    zIndex={2}
                    bgColor={'white'}
                    px={'5%'}
                    width={'100%'}
                    color={'main.900'}
                    backgroundColor={'gray.100'}
                    border={0}
                    boxShadow={'2xs'}
                    borderRadius={0}
                    position={'relative'}
                >
                    <Card.Body>
                        <SimpleGrid columns={{
                            base: 1,
                            md: 3
                        }}>
                            <GridItem
                                colSpan={{
                                    base: 1,
                                    md: 2
                                }}
                                px={4}
                                pb={10}
                            >
                                <Center pt={10} mt={20}>
                                    <Image
                                        src={'/img/projects/sotd/title.png'}
                                        width={500}
                                        height={500}
                                        alt='SOTD'
                                    />
                                </Center>
                                <Separator borderColor={'main.600'} my={10} />
                                <Stack width={'80%'} mx={'auto'}>

                                    <Text>
                                        <b>Sons of the Depths</b> es un videojuego de survival horror en tercera persona que toma inspiración del horror cósmico y las obras de H.P. Lovecraft.
                                        Ambientado en un pueblo costero en Rusia, cerca del Ártico,
                                        el jugador asume el papel de <b>Hanna</b>, una periodista que investiga leyendas locales y los secretos que ocultan.
                                    </Text>
                                    <Text my={3}>
                                        El juego combina <b>exploración, combate, gestión de recursos y resolución de acertijos</b>, en un entorno cargado de tensión, donde la ambientación gélida y
                                        el diseño sonoro contribuyen a crear una experiencia inmersiva centrada en el misterio y la supervivencia.

                                    </Text>
                                </Stack>

                            </GridItem>
                            <GridItem
                                position={'relative'}
                                colSpan={1}
                                px={3}
                                justifyContent={'center'}
                                justifyItems={'center'}
                                alignContent={'center'}
                            >
                                <Center
                                    position="relative"
                                    height={{
                                        base: 100,
                                        md: 500
                                    }}
                                    width={{
                                        base: 100,
                                        md: 500
                                    }}
                                >
                                    <Image
                                        style={{
                                            position: 'absolute',
                                            top: -50,
                                            left: 0,
                                            bottom: -100,
                                            right: 0,
                                        }}
                                        src={'/img/projects/sotd/concept/visuals1.png'}
                                        alt={'Hero'}
                                        objectFit={'cover'}
                                        layout={'fill'}
                                        objectPosition={'top'}
                                    />
                                </Center>
                                <Center pb={5}>
                                    <Link
                                        style={{
                                            textDecoration: 'underline',

                                        }}
                                        href={getLocation() + mainRoutes.projects.path}
                                    >
                                        <Button
                                            colorPalette={'blue'}
                                            size={'lg'}
                                            px={10}
                                        >
                                            <BsChevronRight />
                                            Ver más
                                        </Button>
                                    </Link>
                                </Center>
                            </GridItem>

                        </SimpleGrid>
                    </Card.Body>
                </Card.Root>

                <Flex flex={1}></Flex>
            </Center>








        </Box >
    );
}