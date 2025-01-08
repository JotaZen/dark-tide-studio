import { Badge, Box, Button, Heading, HStack, Stack, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsChevronRight } from 'react-icons/bs'

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
            >
                <Box
                    width={'100%'}
                    height={'20rem'}
                    position={'relative'}
                >
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className='glass-dark'
                        style={{
                            objectFit: imageFit,
                            objectPosition: imagePosition,
                            transition: 'transform 0.05s ease',
                            clipPath: 'polygon(20% 0%, 80% 0%, 100% 0, 100% 80%, 19% 80%, 0 88%, 0% 80%, 0 8%)', // Cambia esta forma según lo que necesites
                        }}

                    />
                    <Box
                        position="absolute"
                        top="0"
                        left="0"
                        right="0"
                        bottom="0"
                        bgColor={'rgba(0,0,0,0.05)'}
                        style={{
                            clipPath: 'polygon(20% 0%, 80% 0%, 100% 0, 100% 80%, 19% 80%, 0 88%, 0% 80%, 0 8%)' // Cambia esta forma según lo que necesites
                        }}
                    />
                </Box>
                <Box
                    position={'absolute'}
                    right={3}
                    bottom={8}
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
                <Heading color={'main.500'}>
                    {title}
                </Heading>
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