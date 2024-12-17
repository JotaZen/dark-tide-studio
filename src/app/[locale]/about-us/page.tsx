import Hero from '@/components/layout/hero/hero'
import PageTitle from '@/components/layout/hero/page-title'
import { Box, Flex } from '@chakra-ui/react'
import { useTranslations } from 'next-intl'
import React from 'react'

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
                <Flex
                    flex={1}
                    align={{
                        base: 'flex-end'
                    }}
                    justify={{
                        base: 'flex-end',

                    }}
                    h={'100%'}
                    pt={'30dvh'}
                    pb={'5%'}
                >
                    <Box mt={'25dvh'} />
                    <PageTitle
                        gap='25dvw'
                        title={t('routes.about-us.title')}
                        leftChildren={
                            <>

                            </>
                        }
                    />
                    <Box mb={'12dvh'} />

                </Flex>
                <Box bgColor={'gray.800'} py={200}>

                </Box>
            </Hero>

        </>
    )
}

export default Page