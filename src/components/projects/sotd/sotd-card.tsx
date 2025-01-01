import Overlay from '@/components/ui/bg/overlay'
import { getLocation } from '@/helpers/routesHelper'
import { projectRoutes } from '@/routes/routes'
import { Button, Center, Flex, GridItem, Heading, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsChevronRight } from 'react-icons/bs'

const SOTDCard = () => {
    return (
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

            <SimpleGrid
                zIndex={3}
                columns={{
                    base: 1,
                    md: 2
                }}
                px={'5%'}
            >
                <GridItem
                    colSpan={1}
                    px={4}
                    pb={10}
                >
                    {/* <Center pt={10} mt={20}>
                        <Image
                            src={'/img/projects/sotd/title.png'}
                            width={500}
                            height={500}
                            alt='SOTD'
                        />
                    </Center> */}
                    {/* <Separator borderColor={'gray.600'} my={10} /> */}
                    <Stack width={'80%'} mx={'auto'} justify={'end'} h={'100%'}>
                        <Heading size={'4xl'}>
                            Sons of the Depths
                        </Heading>

                        <Text textAlign={'justify'}>
                            <b>Sons of the Depths</b> es un videojuego de survival horror en tercera persona que toma inspiración del horror cósmico y las obras de H.P. Lovecraft.
                            Ambientado en un pueblo costero en Rusia, cerca del Ártico,
                            el jugador asume el papel de <b>Hanna</b>, una periodista que investiga leyendas locales y los secretos que ocultan.
                        </Text>
                        <Text my={3} textAlign={'justify'}>
                            El juego combina <b>exploración, combate, gestión de recursos y resolución de acertijos</b>, en un entorno cargado de tensión, donde la ambientación gélida y
                            el diseño sonoro contribuyen a crear una experiencia inmersiva centrada en el misterio y la supervivencia.

                        </Text>
                    </Stack>
                    <Center pb={5} mt={5}>
                        <Link
                            style={{
                                textDecoration: 'underline',

                            }}
                            href={getLocation() + projectRoutes.sotd.path}
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
                <GridItem
                    position={'relative'}
                    colSpan={1}
                    px={3}
                    justifyContent={'center'}
                    justifyItems={'center'}
                    alignContent={'center'}
                >
                    {/* <Center
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
                    </Center> */}

                </GridItem>

            </SimpleGrid>





            <Flex flex={1}></Flex>
        </Center>

    )
}

export default SOTDCard