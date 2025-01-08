import Hero from '@/components/layout/hero/hero'
import PageTitle from '@/components/layout/hero/page-title'
import ScrollButton from '@/components/ui/buttons/scroll-button'
import { Box, Center, Flex } from '@chakra-ui/react'
import React from 'react'

const Page = () => {
    return (
        <Box as={'main'}>
            <Hero
                images={[
                    {
                        src: "/img/projects/huaso-showdown/huaso.png",
                    }
                ]}
            >
                <Flex
                    flex={1}
                    align={{
                        base: 'flex-end'
                    }}
                    justify={{
                        base: 'flex-end',

                    }}
                    h={'100%'}
                    pb={'5%'}
                >
                    <PageTitle
                        title='Huaso Showdown'
                    />
                </Flex>
                <ScrollButton />
            </Hero>
            <Center
                flexDir={'column'}
                position={'relative'}
                width={'100%'}
                height={'100dvh'}
                objectFit={'cover'}

            >
                <iframe
                    src="https://itch.io/embed-upload/12448511?color=333333"
                    aria-label="Huaso Showdown"
                    style={{
                        zIndex: 1,
                        width: '100%',
                        height: '100%',
                        border: 'none'
                    }}
                >
                    <a href="https://darktidestudio.itch.io/test">
                        Play Test on itch.io</a>
                </iframe>
            </Center>

        </Box>
    )
}

export default Page