import Carousel from '@/components/ui/carousel'
import { Box, Center, Stack, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SOTDIndex = () => {
    return (
        <Center py={10} bgColor={'gray.50'} color={'main.800'} >

            <Stack flex={1} bgColor={'white'} maxWidth={'1080px'} p={5}>
                <Center mt={3}>
                    <Image
                        src={'/img/projects/sotd/title.png'}
                        width={300}
                        height={300}
                        alt='SOTD'
                    />
                </Center>

                <h1>Page</h1>
                <Text fontWeight={'bold'}>
                    Índice
                </Text>
                <Link href={'#introduccion'}>
                    Introducción
                </Link>

                <Carousel
                    items={
                        ['1.jpg', '2.jpg', '3.png', '4.png'].map((image, index) => {
                            return (
                                <Box key={index}
                                    width={300}
                                    height={300}>

                                    <Image
                                        key={index}
                                        src={`/img/projects/sotd/concept/${image}`}
                                        layout={'fill'}
                                        objectFit={'cover'}
                                        objectPosition={'top'}
                                        alt={`SOTD ${index}`}
                                    />
                                </Box>
                            )
                        })
                    }
                />
            </Stack>
        </Center>
    )
}

export default SOTDIndex