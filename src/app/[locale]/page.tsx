
import Hero from '@/components/layout/hero/hero';
import ScrollButton from '@/components/ui/buttons/scroll-button';
import { Box, Heading, Stack, Text } from '@chakra-ui/react';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { Flex } from '@chakra-ui/react';
import SOTDCard from '@/components/projects/sotd/sotd-card';

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

                        >
                            Studio
                        </Text>
                    </Flex>

                    <Stack gap={5} mt={3}>
                        <Heading
                            fontSize={{
                                base: '3xl',
                                md: '5xl'
                            }}
                            as={'h1'}
                            color={'gray.200'}
                            style={{
                                fontWeight: 'bolder',
                            }}
                            letterSpacing={'tight'}
                            m={0}
                        >
                            {t('pages.home.quote_hero_1')}
                        </Heading>
                        <Heading
                            fontSize={{
                                base: '4xl',
                                md: '5xl'
                            }}
                            as={'h1'}
                            color={'main.500'}
                            style={{
                                fontWeight: 'bolder',
                            }}
                            letterSpacing={'tight'}
                            m={0}
                        >
                            {t('pages.home.quote_hero_2')}
                        </Heading>
                    </Stack>




                </Stack>
                <ScrollButton />

            </Hero>


            <SOTDCard />







        </Box >
    );
}