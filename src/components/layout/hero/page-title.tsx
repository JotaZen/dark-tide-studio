import { Flex, Heading, Stack } from '@chakra-ui/react'
import React from 'react'

const PageTitle = ({
    leftChildren,
    rightChildren,
    title,
    gap = '7dvw',
    align = 'center',
    leftPadding = '10'
}: {
    leftChildren?: React.ReactNode,
    rightChildren?: React.ReactNode
    title?: string
    gap?: string
    align?: string
    leftPadding?: string
}) => {

    return (
        <Stack flex={1} m={'0 auto'} w={'100%'} align={align}>
            <Flex
                flex={1}
                zIndex={2}
                gap={gap}
            >
                {/* 1 */}
                <Stack
                    flex={1}
                    align={align}

                    gap={0}
                    pl={leftPadding}>

                    {title && <Flex>
                        <Heading
                            fontSize={{
                                base: 'md',
                                md: 'xl'
                            }}
                            color={'gray.300'}
                            style={{
                                fontWeight: 'bolder',
                            }}
                            as={'h2'}
                            letterSpacing={'tight'}
                            m={0}
                        >
                            Dark
                        </Heading>
                        <Heading
                            fontSize={{
                                base: 'md',
                                md: 'xl'
                            }}
                            color={'main.500'}
                            style={{
                                fontWeight: 'bolder',
                            }}
                            as={'h2'}
                            letterSpacing={'tight'}
                            m={0}
                        >
                            Tide
                        </Heading>
                        <Heading
                            fontSize={{
                                base: 'md',
                                md: 'xl'
                            }}
                            color={'gray.300'}
                            style={{
                                fontWeight: 'bolder',
                            }}
                            as={'h2'}
                            letterSpacing={'tight'}
                            m={0}
                        >
                            Studio
                        </Heading>
                    </Flex>}

                    <Heading
                        fontSize={{
                            base: '3xl',
                            md: '5xl'
                        }}
                        color={'gray.200'}
                        style={{
                            fontWeight: 'bolder',
                        }}
                        letterSpacing={'tight'}
                        m={0}
                        mt={3}
                        as={'h1'}
                    >
                        {title}
                    </Heading>
                    {leftChildren}

                </Stack >
                {/* 2 */}
                {rightChildren && <Flex flex={1}>
                    {
                        rightChildren
                    }
                </Flex >}

            </Flex >
        </Stack>
    )
}

export default PageTitle