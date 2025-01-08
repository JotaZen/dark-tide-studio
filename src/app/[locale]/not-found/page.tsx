import Logo from '@/components/layout/nav-bar/logo'
import { Center, Heading, Text } from '@chakra-ui/react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import React from 'react'

const Page = () => {
    const t = useTranslations()
    return <Center
        flexDir={'column'}
        minH={'100dvh'}
    >
        <Heading
            mb={5}
            size={'6xl'}
        >
            404
        </Heading>
        <Heading>
            {t('pages.404.title')}
        </Heading>
        <Text mb={5}>
            {t('pages.404.description')}
        </Text>
        <Link href={'/'}>
            <Logo />
        </Link>
    </Center>
}

export default Page