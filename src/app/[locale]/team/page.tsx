import Hero from '@/components/layout/hero/hero'
import PageTitle from '@/components/layout/hero/page-title'
import MemberCard from '@/components/team/member-card'
import { Box, Center, GridItem, Separator, SimpleGrid, Stack } from '@chakra-ui/react'
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import React from 'react'
import { BsGithub, BsGlobe, BsInstagram } from 'react-icons/bs'


export async function generateMetadata() {
    const t = await getTranslations();

    return {
        title: t("routes.team.title"),
        description: t("routes.team.description"),
    }
}

const Page = () => {

    const t = useTranslations()
    return (
        <>
            <Hero
                height={'100%'}
                images={[
                    {
                        src: '/img/landing/hero3.jpg',
                        layout: 'fill',
                        objectPosition: 'top'
                    }
                ]}
            >
                <Box mt={'25dvh'} />
                <PageTitle
                    gap='25dvw'
                    title={t('routes.team.title')}
                    leftChildren={
                        <>

                        </>
                    }
                />
                <Box mb={'12dvh'} />

                <Center zIndex={3}>
                    <SimpleGrid

                        columns={{
                            base: 1,
                            md: 2
                        }}
                        gapY={10}
                        gapX={20}
                        p={10}
                    >
                        {/* 1 */}
                        <GridItem >
                            <MemberCard
                                id='jota-zen'
                                name={'Jota Zen'}
                                roles={['Música', 'Developer']}
                                image={'/img/team/Jota.jpg'}
                                description={'Música y desarrollo'}
                                contact={[
                                    {
                                        url: 'https://github.com/JotaZen',
                                        icon: <BsGithub />,
                                        text: '',
                                        color: 'gray',
                                        variant: 'solid',
                                        tooltip: 'GitHub'
                                    },

                                ]}
                            />
                        </GridItem>
                        <GridItem>
                            <MemberCard
                                id='coal-charcoal'
                                name={'Coal Charcoal'}
                                roles={['Ilustrador']}
                                image={'/img/team/Coal.png'}
                                description={'Ilustración y diseño de personajes'}
                                contact={[
                                    {
                                        url: '',
                                        icon: <BsGlobe />,
                                        text: '',
                                        tooltip: 'Web',
                                        color: 'blue',
                                        variant: 'solid'
                                    },
                                    {
                                        url: '/es/projects',
                                        icon: <BsInstagram />,
                                        text: '',
                                        color: 'pink',
                                        variant: 'solid',
                                        tooltip: 'Instagram'
                                    },

                                ]}
                            />
                        </GridItem>





                        <GridItem mr={-5} ml={5}>
                            <MemberCard
                                id='pato'
                                name={'Pato'}
                                roles={['Developer']}
                                image={'/img/team/user.webp'}
                                description={'Desarrollo'}
                                contact={[
                                ]}
                            />
                        </GridItem>

                        <GridItem mr={-5} ml={5}>
                            <MemberCard
                                id='pancho'
                                name={'Pancho'}
                                roles={['Tester', 'QA']}
                                image={'/img/team/user.webp'}
                                description={'Pruebas y control de calidad'}
                                contact={[
                                ]}
                            />
                        </GridItem>

                    </SimpleGrid>

                </Center>
                <Center>
                    <Separator orientation={'horizontal'} width={'50%'} height={'2.5rem'} borderColor={'gray.500'} opacity={'.5'} />
                </Center>
                <Stack py={200} align={'center'}>
                    {/* <Text fontSize={'3xl'} color={'gray.100'} fontWeight={'bold'}>
                        Colaboradores
                    </Text>
                    <MemberCard
                        id='pancho'
                        name={'Pancho'}
                        roles={[]}
                        image={'/img/team/user.webp'}
                        contact={[
                        ]}
                        compact
                    /> */}
                </Stack>
                {/* <Box pb={'30dvh'} /> */}
            </Hero>


        </>
    )
}

export default Page