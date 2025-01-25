
import Hero from '@/components/layout/hero/hero';
import ScrollButton from '@/components/ui/buttons/scroll-button';
import { Box, Heading, Stack, Text } from '@chakra-ui/react';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { Flex } from '@chakra-ui/react';
import SOTDCard from '@/components/projects/sotd/sotd-card';
import HighlightGallery from '@/components/ui/galleries/highlight-gallery';
import HeadingGradient from '@/components/ui/text/heading-gradient';
import { BoxReveal } from '@/components/ui/box-reveal';
import { BlurFade } from '@/components/ui/blur-fade';

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
                        src: '/img/projects/sotd/concept/cat_inter.jpg',
                        objectPosition: 'top'
                    },
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

                ]}


            >

                <Flex
                    align={'center'}
                    position={'relative'}
                    zIndex={2}
                    pl={'15%'}
                    flex={1}
                    mt={{
                        base: '33vh',
                        md: '20vh'
                    }}
                    direction={{
                        base: 'column',
                        md: 'row'
                    }}
                >
                    <Stack
                        flex={{
                            base: 1,
                            md: 1
                        }}
                    >
                        <BoxReveal boxColor={"var(--chakra-colors-main-500)"} duration={0.4}>
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
                        </BoxReveal>

                        <Stack gap={0}>
                            <BoxReveal
                                boxColor={"var(--chakra-colors-main-500)"}
                                duration={0.5}
                            >
                                <Box mt={3}>

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


                                    <HeadingGradient
                                        size={{
                                            base: '3xl',
                                            md: '5xl'
                                        }}
                                    >
                                        {t('pages.home.quote_hero_2')}
                                    </HeadingGradient>
                                </Box>
                            </BoxReveal>
                            <BoxReveal
                                boxColor={"white"}
                                duration={0.6}
                            >
                                <Text mt={5} color={'gray.100'}>
                                    {t('pages.home.description')}
                                </Text>
                            </BoxReveal>
                        </Stack>

                    </Stack>
                    <Stack
                        flex={{
                            base: 1,
                            md: 1
                        }}
                    >
                        {/* <HeadingGradient>
                            asdfasd
                        </HeadingGradient> */}
                    </Stack>



                </Flex>




                <ScrollButton />

            </Hero>
            <BlurFade delay={0.15} inView>
                <HighlightGallery />
            </BlurFade>
            <BlurFade delay={0.15} inView>
                <SOTDCard />
            </BlurFade>







        </Box >
    );
}