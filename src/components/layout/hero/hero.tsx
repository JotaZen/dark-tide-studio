"use client";

import { Box, Flex, Stack } from '@chakra-ui/react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

const Hero = ({
    height = '100vh',
    images = [],
    children
}: {
    height?: string
    images?: {
        src: string
        layout?: 'fill' | 'intrinsic' | 'responsive' | undefined
        objectFit?: 'fill' | 'cover' | 'contain' | 'none' | 'scale-down' | undefined
        objectPosition?: string,
        p?: string
    }[]
    children?: React.ReactNode
}) => {

    const [clientLoaded, setClientLoaded] = useState(false)
    const [backgroundIndex, setBackgroundIndex] = useState(0);

    useEffect(() => {
        const i = setInterval(() => {
            setBackgroundIndex((prev) => {
                if (prev > images.length - 2) {
                    return 0;
                } else {
                    return prev + 1;
                }
            });
        }, 3000);

        setTimeout(() => {
            setClientLoaded(true);
        }, 100);

        return () => {
            clearInterval(i);
        }
    }, [images]);


    return (
        <Flex
            bg={'#0f0f0f'}
            minH={height}
            w={'100%'}
            p={0}

            style={{ position: 'relative' }}
            flex={1}

        >

            {
                images.map((image, index) => (
                    <Image
                        key={index}
                        style={{
                            opacity: (backgroundIndex === index && clientLoaded) ? 1 : 0,
                            transition: 'opacity .5s',
                            padding: image.p || '0'
                        }}
                        src={image.src}
                        alt={'Hero Image ' + index}
                        layout={image.layout || 'fill'}
                        objectFit={image.objectFit || 'cover'}
                        objectPosition={image.objectPosition || 'center'}

                    />
                ))
            }


            {/* overlay */}
            <Box
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    zIndex: 1,
                }}
            />



            <Stack flex={1} m={'0 auto'} zIndex={3}>
                {children}
            </Stack>
        </Flex >
    )
}

export default Hero