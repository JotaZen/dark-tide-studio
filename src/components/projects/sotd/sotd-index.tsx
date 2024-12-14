
import Carousel from '@/components/ui/carousel'
import { Box, Center, Separator, Stack, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { PhotoView } from 'react-photo-view'

const SOTDIndex = () => {

    return (
        <Center py={10} bgColor={'gray.50'} color={'main.800'} >

            <Stack flex={1} bgColor={'white'} maxWidth={'1080px'} p={5} overflow={'auto'}>
                <Center mt={3} py={6}>
                    <Image
                        src={'/img/projects/sotd/title.png'}
                        width={300}
                        height={300}
                        alt='SOTD'
                    />
                </Center>
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

                                    <PhotoView src={`/img/projects/sotd/concept/${image}`}>
                                        {/* <img src="/1-thumbnail.jpg" alt="" /> */}
                                        <div className="image-container">
                                            <Image
                                                style={{
                                                    transition: 'all 0.5s ease',
                                                    userSelect: 'none',
                                                    cursor: 'pointer',
                                                }}
                                                className='scale-hover'
                                                draggable={false}
                                                key={index}
                                                src={`/img/projects/sotd/concept/${image}`}
                                                layout={'fill'}
                                                objectFit={'cover'}
                                                objectPosition={'top'}
                                                alt={`SOTD ${index}`}
                                            />
                                        </div>
                                    </PhotoView>
                                </Box>
                            )
                        })
                    }
                />
                <Separator borderColor={'gray.200'} my={10} />
                <Center flexDir={'column'} gap={5}>
                    <iframe
                        aria-label='SOTD Miro'
                        width="900"
                        height="700"
                        src="https://miro.com/app/embed/uXjVL3WPGfA=/?pres=1&frameId=3458764610683139392&embedId=32940798118"
                        frameBorder="0"
                        scrolling="no"
                        allow="fullscreen; clipboard-read; clipboard-write"
                        allowFullScreen></iframe>


                    <iframe
                        aria-label='SOTD Test lock'
                        src="https://drive.google.com/file/d/13uKkYHCxnfSIsHbrzXlhXvi_C3JGtzMg/preview"
                        width="640" height="480"
                        allow="autoplay"
                    />
                </Center>
            </Stack>
        </Center >
    )
}

export default SOTDIndex