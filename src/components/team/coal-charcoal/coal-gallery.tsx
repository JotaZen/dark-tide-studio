"use client"

import MasonryGrid from '@/components/ui/masonry-grid'
import { Box } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import { PhotoView } from 'react-photo-view'

const CoalGallery = () => {
    return (
        <MasonryGrid>
            {
                [
                    'team/coal-charcoal/astarte.jpg',
                    'team/coal-charcoal/festo1.jpg',
                    'team/coal-charcoal/metra.jpg',
                    'team/coal-charcoal/misha.jpg',
                    'team/coal-charcoal/lucifer1.jpg',
                    'team/coal-charcoal/xd1.jpg',
                    'team/coal-charcoal/daniel.png',
                    'team/coal-charcoal/yut.jpg',

                    'projects/sotd/concept/1.jpg',
                    'projects/sotd/concept/2.jpg',
                    'projects/sotd/concept/3.png',
                    'projects/sotd/concept/4.png'

                ].map((image, index) => {
                    return (
                        <Box key={image}
                        // display={'block'}
                        >
                            {/* <img src="/1-thumbnail.jpg" alt="" /> */}
                            <PhotoView src={`/img/${image}`}>
                                <Box position="relative" overflow="hidden">
                                    <Image
                                        src={`/img/${image}`}
                                        alt={`Gallery image ${index}`}
                                        width={500}
                                        height={500}
                                        style={{
                                            cursor: 'pointer',
                                            transition: 'transform 0.05s ease'
                                        }}
                                        onMouseOver={(e) => {
                                            e.currentTarget.style.transform = 'scale(1.1)'
                                        }}
                                        onMouseOut={(e) => {
                                            e.currentTarget.style.transform = 'scale(1.0)'
                                        }}
                                    />
                                </Box>
                                {/* <Image
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
                                /> */}
                            </PhotoView>
                        </Box>
                    )
                })
            }

        </MasonryGrid>
    )
}

export default CoalGallery