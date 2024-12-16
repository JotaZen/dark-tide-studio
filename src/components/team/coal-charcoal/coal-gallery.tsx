"use client"

import MasonryGrid from '@/components/ui/masonry-grid'
import { Box, Image } from '@chakra-ui/react'
// import Image from 'next/image'
import React from 'react'
import { PhotoView } from 'react-photo-view'

const CoalGallery = () => {
    return (
        <MasonryGrid>
            {
                ['astarte.jpg', 'festo1.jpg', 'metra.jpg', 'misha.jpg', 'lucifer1.jpg', 'xd1.jpg', 'daniel.png', 'yut.jpg'].map((image, index) => {
                    return (
                        <Box key={image}
                        // display={'block'}
                        >
                            {/* <img src="/1-thumbnail.jpg" alt="" /> */}
                            <PhotoView src={`/img/team/coal-charcoal/${image}`}>
                                <Image
                                    src={`/img/team/coal-charcoal/${image}`}
                                    style={{
                                        transition: 'all 0.05s ease',
                                        userSelect: 'none',
                                        cursor: 'pointer',
                                    }}
                                    _hover={{
                                        transform: 'scale(1.1)'
                                    }}
                                    draggable={false}
                                    key={index}
                                    objectFit={'cover'}
                                    objectPosition={'top'}
                                    alt={`CC ${index}`}
                                />
                            </PhotoView>
                        </Box>
                    )
                })
            }
            {
                ['1.jpg', '2.jpg', '3.png', '4.png'].map((image, index) => {
                    return (
                        <Box key={image}
                        // display={'block'}
                        >
                            {/* <img src="/1-thumbnail.jpg" alt="" /> */}
                            <PhotoView src={`/img/projects/sotd/concept/${image}`}>
                                <Image
                                    src={`/img/projects/sotd/concept/${image}`}
                                    style={{
                                        transition: 'all 0.05s ease',
                                        userSelect: 'none',
                                        cursor: 'pointer',
                                    }}
                                    _hover={{
                                        transform: 'scale(1.1)'
                                    }}
                                    draggable={false}
                                    key={index}
                                    objectFit={'cover'}
                                    objectPosition={'top'}
                                    alt={`SOTD ${index}`}
                                />
                            </PhotoView>
                        </Box>
                    )
                })
            }

        </MasonryGrid>
    )
}

export default CoalGallery