import Hero from '@/components/layout/hero/hero'
import PageTitle from '@/components/layout/hero/page-title'
import SOTDCard from '@/components/projects/sotd/sotd-card'
import ScrollButton from '@/components/ui/buttons/scroll-button'
import { Flex } from '@chakra-ui/react'
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import React from 'react'


export async function generateMetadata() {
    const t = await getTranslations();

    return {
        title: t("routes.projects.title"),
        description: t("routes.projects.description"),
    }
}

const Page = () => {

    const t = useTranslations()

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

            <SOTDCard />
        </>
    )
}

export default Page