
import NavBar from '@/components/layout/nav-bar';
import { Box, Center, Flex, Stack, Text } from '@chakra-ui/react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function Page() {

    const t = useTranslations();

    return (
        <Box
            pos={'relative'}
        >
            <NavBar />
            {/* Hero */}
            <Flex
                bg={'red'}
                h={'100dvh'}
                w={'100%'}
                p={0}

                style={{ position: 'relative' }}
                flex={1}
            >
                <Image
                    src={'/img/landing/hero.png'}
                    alt={'Hero'}
                    layout={'fill'}
                    objectFit={'cover'}
                    objectPosition={'center'}
                />
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
                <Flex
                    align={'center'}
                    justify={'center'}
                    flex={1}
                    zIndex={2}
                    gap={'7dvw'}
                    m={'0 auto'}
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

                        <Stack gap={0}>
                            <Text
                                fontSize={'xl'}
                                color={'main.600'}
                                style={{
                                    fontWeight: 'bolder',
                                }}
                                letterSpacing={'tight'}
                                m={0}
                                mt={-5}
                            >
                                Dark Tide Studio
                            </Text>

                            <Text
                                fontSize={'5xl'}
                                color={'white'}
                                style={{
                                    fontWeight: 'bolder',
                                }}
                                letterSpacing={'tight'}
                                m={0}
                            >
                                {t('pages.home.quote_hero_1')}
                            </Text>
                            <Text
                                fontSize={'5xl'}
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
            </Flex >

            {/* Contenido */}


            <Box py={300} >
                <Center>


                </Center>
            </Box>
        </Box >
    );
}