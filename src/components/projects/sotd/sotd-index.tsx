
import PageTitle from '@/components/layout/hero/page-title'
import MemberCard from '@/components/team/member-card'
import Overlay from '@/components/ui/bg/overlay'
import { Center, Stack, Text, Image as ChakraImage, Flex, Card, SimpleGrid, GridItem, Separator } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'

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
                                    <Center pt={10} mt={20}>
                                        <Image
                                            src={'/img/projects/sotd/title.png'}
                                            width={500}
                                            height={500}
                                            alt='SOTD'
                                        />
                                    </Center>
                                    <Separator borderColor={'main.600'} my={10} />
                                    <Text>

                                    </Text>

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
                                        roles={['Música', 'Desarrollo', 'Inteligencia Artificial']}
                                        image={''}
                                        contact={[]}
                                    />
                                </GridItem>



                                <GridItem>
                                    <MemberCard
                                        id='pato'
                                        name={'Patricio Reyes'}
                                        roles={['Director', 'Desarrollo']}
                                        image={''}
                                        description={'Desarrollo'}
                                        contact={[
                                        ]}
                                    />
                                </GridItem>

                                <GridItem>
                                    <MemberCard
                                        id='pancho'
                                        name={'Juan Hernández'}
                                        roles={['Tester', 'QA', 'Diseño de niveles']}
                                        image={''}
                                        description={'Pruebas y control de calidad'}
                                        contact={[
                                        ]}
                                    />
                                </GridItem>
                                <GridItem >
                                    <MemberCard
                                        id='coal-charcoal'
                                        name={'Leonel San Martín'}
                                        roles={['Arte Conceptual', 'Ilustración', 'Diseño']}
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
                    <Flex flex={1}></Flex>

                    <NavigationButtons section='s3' previous='team' />
                </Container>

                <Container id='s3'>
                    {/* <Flex p={5}>
                        <Text color={'main.200'} fontSize={'xl'}>
                            Debilidades
                        </Text>
                    </Flex> */}
                    <Image
                        src={'/img/projects/sotd/concept/1.jpg'}
                        alt={'Hero Image 2'}
                        layout={'fill'}
                        objectFit={'cover'}
                        objectPosition={'top'}

                    />
                    <Overlay />
                    <Flex flex={1} p={5} zIndex={3}>
                        <Text color={'gray.100'} fontSize={'xl'}>
                            Debilidades
                        </Text>
                    </Flex>
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

                    <NavigationButtons section='s5' previous='s3' />
                </Container>
                <Container id='s5' >
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
                </Container>
                {/* <iframe

                    aria-label='SOTD Test lock'
                    src="https://drive.google.com/file/d/13uKkYHCxnfSIsHbrzXlhXvi_C3JGtzMg/preview"
                    width="640" height="480"
                    allow="autoplay"
                /> */}


            </Stack>
        </Center >
    )
}

export default SOTDIndex


const Container = ({ children, id }: { children: React.ReactNode, id: string }) => {
    return <Center
        boxShadow={'inset 0 20px 20px 20px rgba(247, 247, 247, 0.5)'}
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