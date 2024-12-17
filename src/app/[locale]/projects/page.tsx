"use client"

import Hero from '@/components/layout/hero/hero'
import PageTitle from '@/components/layout/hero/page-title'
import SOTDIndex from '@/components/projects/sotd/sotd-index'
import ScrollButton from '@/components/ui/buttons/scroll-button'
import { Flex } from '@chakra-ui/react'
import { useTranslations } from 'next-intl'
import React from 'react'

const Page = () => {

    const t = useTranslations()

    return (
        <>
            <Hero
                height={'50dvh'}
                images={[
                    {
                        src: '/img/landing/hero1.png',
                        layout: 'fill',
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

                        title={t('routes.projects.title')}
                    />
                </Flex>
                <ScrollButton top={400} />
            </Hero >
            <SOTDIndex />
        </>
    )
}

export default Page