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
            minW={"20rem"}
            width={"20rem"}
            position={'relative'}
            borderRadius={'.5rem'}
            className="glass-dark"
            transition={'all 0.3s'}
            _hover={{
                boxShadow: '0 0 1rem .5rem var(--chakra-colors-main-501)', // Glow dinámico
                transform: 'translateY(-.5rem)',
            }}
        >
            <Link
                href={url}
            >
                <Box
                    position={'relative'}
                    zIndex={4}
                >
                    <Box
                        width={'100%'}
                        height={'14rem'}
                        position={'relative'}

                    >
                        <Image
                            src={image}
                            alt={title}
                            fill
                            className='image-with-overlay'
                            style={{
                                objectFit: imageFit,
                                objectPosition: imagePosition,
                                transition: 'transform 0.05s ease',
                                clipPath: 'polygon(0 0, 100% 0, 100% 90%, 20% 90%, 0 100%)', // Cambia esta forma según lo que necesites
                                // clipPath: 'polygon(20% 0%, 80% 0%, 100% 0, 100% 80%, 19% 80%, 0 88%, 0% 80%, 0 8%)', // Cambia esta forma según lo que necesites
                                userSelect: 'none',
                                borderTopLeftRadius: '.5rem',
                                borderTopRightRadius: '.5rem'
                            }}
                            draggable={false}
                        />



                    </Box>

                </Box>
            </Link>

            <Stack px={10} pb={10} pt={3} >
                <Link href={url} style={{ zIndex: 5 }}>
                    <HeadingGradient size='xl'>
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
                <Text fontSize={'sm'} color={'gray.50'}>
                    {description}
                </Text>
                <Box
                    position={'absolute'}
                    right={3}
                    bottom={-3}

                >
                    <Link
                        href={url}
                    >
                        <Button
                            colorPalette={'white'}
                            px={5}
                            fontWeight={'bold'}
                        >
                            Ver más
                            <BsChevronRight
                                size={25}
                            />
                        </Button>
                    </Link>
                </Box>
            </Stack>

        </Box>
    )
}

export default InfoCard