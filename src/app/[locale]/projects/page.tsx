"use client"

import Hero from '@/components/layout/hero/hero'
import PageTitle from '@/components/layout/hero/page-title'
import SOTDIndex from '@/components/projects/sotd/sotd-index'
import ScrollButton from '@/components/ui/buttons/scroll-button'
import { Flex } from '@chakra-ui/react'
import { useTranslations } from 'next-intl'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect } from 'react'



const Page = () => {

    const t = useTranslations()
    const router = useRouter()
    const path = usePathname()
    const params = useSearchParams()


    useEffect(() => {
        if (params.get('no_scroll') !== '1') {
            router.replace(path + '?no_scroll=1')
        }
    }, [params, path, router])

    return (
        <>
            <Hero
                height={'100dvh'}
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
                <ScrollButton />
            </Hero >

            <SOTDIndex />

        </>
    )
}

export default Page