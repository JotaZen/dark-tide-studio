
import PageTitle from '@/components/layout/hero/page-title'
import Logo from '@/components/layout/nav-bar/logo'
import MemberCard from '@/components/team/member-card'
import Overlay from '@/components/ui/bg/overlay'
import ICarousel from '@/components/ui/carousel'
import MasonryGrid from '@/components/ui/masonry-grid'
import { Center, Stack, Text, Image as ChakraImage, Flex, Card, SimpleGrid, GridItem, Separator, Box, HStack, Badge, List } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'
import { PhotoView } from 'react-photo-view'

const SOTDIndex = () => {

    return (
        <Center bgColor={'gray.50'} color={'main.800'}  >

            <Stack flex={1} bgColor={'gray.900'} width={'100%'} gap={0}>
                <Container id='s1'>

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
                                    <Center pt={10} mt={10}>
                                        <Image
                                            src={'/img/projects/sotd/title.png'}
                                            width={500}
                                            height={500}
                                            alt='SOTD'
                                        />
                                    </Center>
                                    <Separator borderColor={'gray.300'} my={5} />
                                    <Text fontSize={'xl'} textAlign={'justify'} mb={3}>
                                        Objetivos
                                    </Text>

                                    <List.Root>
                                        <List.Item fontWeight={'bold'}>
                                            Fundar un estudio de videojuegos y conformar una comunidad en la VIII Región de Chile en torno a la creación de estos
                                        </List.Item>
                                        <List.Item fontWeight={'bold'}>
                                            Lanzar un videojuego de survival horror que sea inmersivo y desafiante
                                        </List.Item>
                                    </List.Root>
                                    <br />
                                    <List.Root>

                                        <List.Item>
                                            Lanzar una Demo jugable de SOTD con 4 a 6 horas de duración dentro de 2025
                                        </List.Item>
                                        <List.Item>
                                            Conseguir colaboradores y financiamiento para el desarrollo
                                        </List.Item>
                                        <List.Item>
                                            Publicar el videojuego completo en la plataforma Steam
                                        </List.Item>
                                    </List.Root>
                                    <Separator borderColor={'gray.300'} my={5} />
                                    <Logo inverted />
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
                                    <Image
                                        style={{
                                            position: 'absolute',
                                            bottom: 10,
                                            right: 0,
                                        }}
                                        src={'/img/projects/pegi.png'}
                                        alt={'PG'}
                                        objectFit={'cover'}
                                        width={100}
                                        height={100}
                                        objectPosition={'top'}
                                    />

                                </GridItem>

                            </SimpleGrid>
                        </Card.Body>
                    </Card.Root>

                    <Flex flex={1}></Flex>
                    <NavigationButtons section='team' />
                </Container>

                <Container id='team'>
                    <Image
                        src={'/img/bg/dark.jpg'}
                        alt={'Hero Image 2'}
                        layout={'fill'}
                        objectFit={'cover'}
                        objectPosition={'center'}

                    />
                    <Overlay />
                    <Flex zIndex={3} gap={'10%'} width={'100%'} flex={1} justify={'center'} align={'center'} position={'relative'}
                        direction={{
                            base: 'column',
                            md: 'row'
                        }}
                    >
                        <Stack justify={'start'} align={'start'}>

                            <PageTitle
                                title={'Equipo'}
                            />
                            <Separator borderColor={'main.800'} my={10} />
                            <SimpleGrid
                                columns={{
                                    base: 1,
                                    md: 2
                                }}
                                gap={8}
                            >
                                {/* 1 */}
                                <GridItem >
                                    <MemberCard
                                        id='jota-zen'
                                        name={'Jordy Zenteno'}
                                        roles={['Música', 'Sonido', 'Inteligencia Artificial']}
                                        description='Música, sonido e inteligencia artificial'
                                        image={''}
                                        contact={[]}
                                    />
                                </GridItem>



                                <GridItem>
                                    <MemberCard
                                        id='pato'
                                        name={'Patricio Reyes'}
                                        roles={['Dirección', 'Desarrollo', 'Programación']}
                                        image={''}
                                        description={'Dirección, desarrollo y programación del proyecto'}
                                        contact={[
                                        ]}
                                    />
                                </GridItem>

                                <GridItem>
                                    <MemberCard
                                        id='pancho'
                                        name={'Juan Hernández'}
                                        roles={['Testing', 'QA', 'Diseño de niveles']}
                                        image={''}
                                        description={'Diseño de niveles y control de calidad'}
                                        contact={[
                                        ]}
                                    />
                                </GridItem>
                                <GridItem >
                                    <MemberCard
                                        id='coal-charcoal'
                                        name={'Leonel San Martín'}
                                        description='Arte conceptual y diseño de personajes'
                                        roles={['Arte', 'Ilustración', 'Diseño']}
                                        image={''}
                                        contact={[]}
                                    />
                                </GridItem>

                            </SimpleGrid>
                        </Stack>
                    </Flex>


                    <NavigationButtons section='s2' previous='s1' />
                </Container>



                <Container id='s2'>
                    <ChakraImage
                        src='https://media.fab.com/image_previews/gallery_images/39961480-3a90-4ae7-9f5d-1b58e38dc961/3fa82aea-e61b-46fc-8715-1fd1be91e11b.jpg'
                        width={'100%'}
                        height={'100%'}
                        objectFit={'cover'}
                        zIndex={0}
                        position={'absolute'}
                        alt='GeorgeShachnev'
                    />

                    <Overlay />
                    <Flex
                        width={'80%'}
                        justify={'center'}

                        zIndex={3}
                        direction={{
                            base: 'column',
                            md: 'row'
                        }}
                        flex={1}
                    >
                        <Stack justify={'space-evenly'} align={'center'} flex={1} gap={5}>
                            <Stack align={'center'}>

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
                                    mb={5}
                                >
                                    Fortalezas
                                </Text>

                                <List.Root color={'white'} fontSize={'xl'}>
                                    <List.Item>
                                        Conocimiento del área e industria
                                    </List.Item>
                                    <List.Item>
                                        Experiencia usando metodologías que facilitan el desarrollo
                                    </List.Item>
                                    <List.Item>
                                        Tiempo y recursos para invertir en el desarrollo
                                    </List.Item>
                                </List.Root>
                            </Stack>
                            <Stack align={'center'}>
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
                                    mb={5}
                                >
                                    Oportunidades
                                </Text>
                                <List.Root color={'white'} fontSize={'xl'}>
                                    <List.Item>
                                        Sin competencia en la región
                                    </List.Item>
                                    <List.Item>
                                        Tecnología accesible y software de alta calidad
                                    </List.Item>
                                    <List.Item>
                                        Industria en crecimiento, con muchos eventos y networking
                                    </List.Item>
                                    <List.Item>
                                        Auge del mercado Indie
                                    </List.Item>
                                </List.Root>
                            </Stack>
                        </Stack>
                        <Stack flex={1} justify={'space-evenly'} align={'center'} gap={5}>
                            <Stack align={'center'}>

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
                                    mb={5}
                                >
                                    Debilidades
                                </Text>
                                <List.Root color={'white'} fontSize={'xl'}>
                                    <List.Item>
                                        Equipo pequeño con poca experiencia
                                    </List.Item>
                                    <List.Item>
                                        No se cubren todos los roles necesarios
                                    </List.Item>
                                    <List.Item>
                                        La falta de un modelador 3D
                                    </List.Item>
                                </List.Root>
                            </Stack>
                            <Stack align={'center'}>
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
                                    mb={5}
                                >
                                    Amenazas
                                </Text>
                                <List.Root color={'white'} fontSize={'xl'}>
                                    <List.Item>
                                        Falta de financiamiento para el desarrollo
                                    </List.Item>
                                    <List.Item>
                                        Alta cantidad de nuevos videojuegos en el mercado
                                    </List.Item>
                                    <List.Item>
                                        Alta centralización de la industria en Santiago
                                    </List.Item>
                                    <List.Item>
                                        Dificultad del mundo de desarrollo de videojuegos
                                    </List.Item>
                                </List.Root>
                            </Stack>

                        </Stack>


                    </Flex>


                    <NavigationButtons section='s3' previous='team' />
                </Container>

                <Container id='s3'>
                    <Flex p={5}>
                    </Flex>
                    <Image
                        src={'/img/projects/sotd/concept/1.jpg'}
                        alt={'Hero Image 2'}
                        layout={'fill'}
                        objectFit={'cover'}
                        objectPosition={'top'}

                    />
                    <Overlay />

                    <Center height={'80%'} width={'100%'} px={'10%'} position={'relative'} bgColor={'white'} zIndex={3}>
                        <iframe
                            aria-label='Steam stats'
                            src="https://flo.uri.sh/visualisation/20221119/embed"
                            style={{
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                zIndex: 1,
                            }}
                            frameBorder="0"
                            scrolling="no"
                            allow="fullscreen; clipboard-read; clipboard-write"
                            allowFullScreen></iframe>
                        {/* <iframe src='https://flo.uri.sh/visualisation/20221119/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameborder='0' scrolling='no' style='width:100%;height:600px;' sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe><div style='width:100%!;margin-top:4px!important;text-align:right!important;'><a class='flourish-credit' href='https://public.flourish.studio/visualisation/20221119/?utm_source=embed&utm_campaign=visualisation/20221119' target='_top' style='text-decoration:none!important'><img alt='Made with Flourish' src='https://public.flourish.studio/resources/made_with_flourish.svg' style='width:105px!important;height:16px!important;border:none!important;margin:0!important;'> </a></div> */}
                    </Center>
                    <NavigationButtons section='s4' previous='s2' />
                </Container>
                <Container id='s4' >
                    <Center height={'100%'} width={'100%'} position={'relative'} bgColor={'white'}>
                        <iframe
                            aria-label='SOTD Presentation'
                            style={{
                                width: '100%',
                                height: '100%',
                            }}

                            src="https://docs.google.com/presentation/d/e/2PACX-1vS_wDKsFM-Ypjfmo-VwT9ohDzWbLX8t2v1lki5-AEV7-1S816lZBofkVjlJKHXBYSN2ORtja01CbEtc/embed?start=false&loop=false&delayms=60000"
                        ></iframe>

                    </Center>
                    <NavigationButtons section='s5' previous='s3' />
                </Container>
                <Container id='s5' >
                    <iframe
                        aria-label='SOTD Miro'
                        style={{
                            width: '100%',
                            height: '100%',
                        }}
                        src="https://miro.com/app/embed/uXjVL3WPGfA=/?pres=1&frameId=3458764610683139392&embedId=32940798118"
                        frameBorder="0"
                        scrolling="no"
                        allow="fullscreen; clipboard-read; clipboard-write"
                        allowFullScreen></iframe>
                    <NavigationButtons previous='s4' section='gallery' />
                </Container>

                {/* <iframe

                    aria-label='SOTD Test lock'
                    src="https://drive.google.com/file/d/13uKkYHCxnfSIsHbrzXlhXvi_C3JGtzMg/preview"
                    width="640" height="480"
                    allow="autoplay"
                /> */}

                <Box px={'15%'} py={100} id='gallery'>
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
                            <HStack>
                                <Badge>Ilustración</Badge>
                                <Badge>Arte conceptual</Badge>
                            </HStack>
                        </Stack>
                    </Flex>
                    <MasonryGrid xlCols={5}>
                        {
                            ['fishman.jpg', 'muelle.jpg', '1.jpg', '2.jpg', '3.png', '7.jpg', 'cat_inter.jpg',
                                'pueblerino.png', 'cig.png', 'hanna.jpg', 'cat.png'
                            ].map((image, index) => {
                                return (
                                    <Box key={image}
                                    // display={'block'}
                                    >
                                        {/* <img src="/1-thumbnail.jpg" alt="" /> */}
                                        <PhotoView src={`/img/projects/sotd/concept/${image}`}>
                                            <ChakraImage
                                                src={`/img/projects/sotd/concept/${image}`}
                                                style={{
                                                    transition: 'all 0.05s ease',
                                                    userSelect: 'none',
                                                    cursor: 'pointer',
                                                }}
                                                _hover={{
                                                    transform: 'scale(1.1)'
                                                }}
                                                draggable={false}
                                                key={index}
                                                objectFit={'cover'}
                                                objectPosition={'top'}
                                                alt={`CC ${index}`}
                                            />
                                        </PhotoView>
                                    </Box>
                                )
                            })
                        }

                    </MasonryGrid>
                    <Flex my={20} justify={'center'}>
                    </Flex>
                    <ICarousel
                        items={
                            [
                                <Box key={'4'}>
                                    <PhotoView src={`/img/projects/sotd/concept/sb4.jpg`}>
                                        <ChakraImage
                                            src={`/img/projects/sotd/concept/sb4.jpg`}
                                            style={{
                                                transition: 'all 0.05s ease',
                                                userSelect: 'none',
                                                cursor: 'pointer',
                                            }}
                                            _hover={{
                                                transform: 'scale(1.1)'
                                            }}
                                            draggable={false}
                                            objectFit={'cover'}
                                            objectPosition={'top'}
                                            alt={`StoryBoard 2`}
                                        />
                                    </PhotoView>
                                </Box>,
                                <Box key={'3'}>
                                    <PhotoView src={`/img/projects/sotd/concept/sb3.jpg`}>
                                        <ChakraImage
                                            src={`/img/projects/sotd/concept/sb3.jpg`}
                                            style={{
                                                transition: 'all 0.05s ease',
                                                userSelect: 'none',
                                                cursor: 'pointer',
                                            }}
                                            _hover={{
                                                transform: 'scale(1.1)'
                                            }}
                                            draggable={false}
                                            objectFit={'cover'}
                                            objectPosition={'top'}
                                            alt={`StoryBoard 2`}
                                        />
                                    </PhotoView>
                                </Box>,
                                <Box key={'2'}>
                                    <PhotoView src={`/img/projects/sotd/concept/sb2.jpg`}>
                                        <ChakraImage
                                            src={`/img/projects/sotd/concept/sb2.jpg`}
                                            style={{
                                                transition: 'all 0.05s ease',
                                                userSelect: 'none',
                                                cursor: 'pointer',
                                            }}
                                            _hover={{
                                                transform: 'scale(1.1)'
                                            }}
                                            draggable={false}
                                            objectFit={'cover'}
                                            objectPosition={'top'}
                                            alt={`StoryBoard 2`}
                                        />
                                    </PhotoView>
                                </Box>,
                                <Box key={'1'}>
                                    <PhotoView src={`/img/projects/sotd/concept/sb1.jpg`}>
                                        <ChakraImage
                                            src={`/img/projects/sotd/concept/sb1.jpg`}
                                            style={{
                                                transition: 'all 0.05s ease',
                                                userSelect: 'none',
                                                cursor: 'pointer',
                                            }}
                                            _hover={{
                                                transform: 'scale(1.1)'
                                            }}
                                            draggable={false}
                                            objectFit={'cover'}
                                            objectPosition={'top'}
                                            alt={`StoryBoard 2`}
                                        />
                                    </PhotoView>
                                </Box>,
                            ]
                        }


                    />
                    <Center mt={10}>
                        <NavigationButtons previous='s5' />
                    </Center>
                </Box>

            </Stack>
        </Center >
    )
}

export default SOTDIndex


const Container = ({ children, id }: { children: React.ReactNode, id: string }) => {
    return <Center
        id={id}
        flexDir={'column'}
        position={'relative'}
        width={'100%'}
        height={'100dvh'}
        objectFit={'cover'}
    >
        {children}
    </Center>
}

const NavigationButtons = ({ section, previous, padding }: {
    section?: string
    previous?: string
    padding?: string
}) => {
    return <Flex
        py={padding || '5'}
        color={'main.500'}
        zIndex={2}
    >
        <Link href={'#' + previous}>
            <Flex
                hidden={!previous}
                justify={'center'}
                width={'40dvw'}
                transition={'all 0.3s'}
                _hover={{
                    color: 'white',
                    cursor: 'pointer'
                }}>
                <BsChevronUp
                    size={50}
                />
            </Flex>
        </Link>
        <Link href={'#' + section}>
            <Flex
                hidden={!section}
                justify={'center'}
                width={'40dvw'}
                transition={'all 0.3s'}
                _hover={{
                    color: 'white',
                    cursor: 'pointer'
                }}>
                <BsChevronDown
                    size={50}
                />
            </Flex>
        </Link>


    </Flex>
}