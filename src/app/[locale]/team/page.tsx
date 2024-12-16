import Hero from '@/components/layout/hero/hero'
import PageTitle from '@/components/layout/hero/page-title'
import MemberCard from '@/components/team/member-card'
import { Box, Center, GridItem, SimpleGrid } from '@chakra-ui/react'
import { useTranslations } from 'next-intl'
import React from 'react'
import { BsGithub, BsGlobe, BsInstagram } from 'react-icons/bs'

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

                <Center pb={'30dvh'} zIndex={3}>
                    <SimpleGrid

                        columns={{
                            base: 1,
                            md: 2
                        }}
                        gapY={10}
                        gapX={5}
                        p={10}
                    >
                        {/* 1 */}
                        <GridItem >
                            <MemberCard
                                id='jota-zen'
                                name={'Jota Zen'}
                                roles={['Músico', 'Developer']}
                                image={'/img/team/Jota.jpg'}
                                description={'Música y desarrollo.'}
                                contact={[
                                    {
                                        url: 'https://github.com/JotaZen',
                                        icon: <BsGithub />,
                                        text: 'Github',
                                        color: 'gray',
                                        variant: 'solid'
                                    },

                                ]}
                            />
                        </GridItem>
                        <GridItem mt={-5}>
                            <MemberCard
                                id='coal-charcoal'
                                name={'Coal Charcoal'}
                                roles={['Ilustrador']}
                                image={'/img/team/Coal.png'}
                                description={'Ilustración y diseño de personajes'}
                                contact={[
                                    {
                                        url: '/es/projects',
                                        icon: <BsGlobe />,
                                        text: 'Portfolio',
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


                    </SimpleGrid>
                </Center>
            </Hero>


        </>
    )
}

export default Page