import Hero from '@/components/layout/hero/hero'
import PageTitle from '@/components/layout/hero/page-title'
import { Box } from '@chakra-ui/react'
import { useTranslations } from 'next-intl'
import React from 'react'

const Page = () => {
    const t = useTranslations()
    return (
        <>
            <Hero
                height={'60dvh'}
                images={[
                    {
                        src: '/img/landing/hero5.png',
                        layout: 'fill',
                        objectPosition: 'top'
                    }
                ]}
            >
                <PageTitle
                    gap='50dvw'
                    title={t('routes.about-us.title')}
                    leftChildren={
                        <>

                        </>
                    }
                />
            </Hero>

            <Box bgColor={'gray.800'} py={200}>

            </Box>
        </>
    )
}

export default Page