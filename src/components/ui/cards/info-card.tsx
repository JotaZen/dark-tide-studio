import { Badge, Box, Button, HStack, Stack, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsChevronRight } from 'react-icons/bs'
import HeadingGradient from '../text/heading-gradient'

const InfoCard = ({
    title,
    description,
    image,
    imageFit = 'cover',
    imagePosition = 'center',
    badges,
    url
}: {
    title: string
    description: string
    image: string
    badges?: string[]
    imageFit?: "cover" | "contain"
    imagePosition?: "center" | "top" | "bottom" | "left" | "right"
    url: string
}) => {
    return (
        <Box
            width={"30rem"}
            position={'relative'}
        >
            <Box
                position={'relative'}
                zIndex={4}
            >
                <Box
                    width={'100%'}
                    height={'22rem'}
                    position={'relative'}
                >
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className='glass-dark image-with-overlay'
                        style={{
                            objectFit: imageFit,
                            objectPosition: imagePosition,
                            transition: 'transform 0.05s ease',
                            clipPath: 'polygon(20% 0%, 80% 0%, 100% 0, 100% 80%, 19% 80%, 0 88%, 0% 80%, 0 8%)', // Cambia esta forma según lo que necesites
                            borderLeft: '.3rem solid var(--chakra-colors-main-500)',
                            userSelect: 'none'
                        }}
                        draggable={false}
                    />



                </Box>
                <Box
                    position={'absolute'}
                    right={3}
                    bottom={12}

                >
                    <Link
                        href={url}
                    >
                        <Button
                            colorPalette={'white'}
                            px={5}
                            fontWeight={'bold'}
                        >
                            {title}
                            <BsChevronRight
                                size={25}
                            />
                        </Button>
                    </Link>
                </Box>
            </Box>

            <Stack mt={-6} px={10}>
                <Link href={url} style={{ zIndex: 5 }}>
                    <HeadingGradient size='2xl'>
                        {title}
                    </HeadingGradient>
                </Link>
                <HStack>
                    {
                        badges?.map(badge => (
                            <Badge
                                key={badge}
                                colorScheme={'main'}
                            >
                                {badge}
                            </Badge>
                        ))
                    }
                </HStack>
                <Text>
                    {description}
                </Text>
            </Stack>

        </Box>
    )
}

export default InfoCard