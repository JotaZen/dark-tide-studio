
import Hero from '@/components/layout/hero/hero';
import Overlay from '@/components/ui/bg/overlay';
import ScrollButton from '@/components/ui/buttons/scroll-button';
import { getLocation } from '@/helpers/routesHelper';
import mainRoutes from '@/routes/routes';
import { Box, Button, Card, Center, Flex, GridItem, Separator, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';
import { BsChevronRight } from 'react-icons/bs';
import Markdown from 'react-markdown';


export async function generateMetadata() {
    const t = await getTranslations();

    return {
        title: t("metadata.title"),
        description: t("metadata.description")
    }
}

export default function Page() {
    const t = useTranslations();

    return (
        <Box as={'main'}>

            <Hero
                height={'100dvh'}
                images={[
                    {
                        src: '/img/landing/hero1.png',
                    },
                    {
                        src: '/img/landing/hero4.jpg',
                        objectPosition: 'top'
                    },
                    {
                        src: '/img/landing/hero6.png',
                        objectPosition: 'top'
                    },
                    {
                        src: '/img/landing/hero3.jpg',
                        objectPosition: 'top'
                    },
                    {
                        src: '/img/projects/sotd/concept/muelle.jpg',
                    },
                    {
                        src: '/img/projects/sotd/concept/cat_inter.jpg',
                        objectPosition: 'top'
                    }
                ]}
            >
                <Stack flex={1} justify={'center'} align={'start'} position={'relative'} zIndex={2}
                    pl={'15%'}

                >
                    <Flex
                        zIndex={2}
                    >
                        {/* 1 */}

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

                    <Stack>
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




                </Stack>
                <ScrollButton />

            </Hero>



            <Center
                flexDir={'column'}
                position={'relative'}
                width={'100%'}
                minH={'100dvh'}
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
                                            <Markdown>```Monospace```</Markdown>
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