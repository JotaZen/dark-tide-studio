import { Flex, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const PageTitle = ({
    leftChildren,
    rightChildren,
    title,
    gap = '7dvw'
}: {
    leftChildren: React.ReactNode,
    rightChildren?: React.ReactNode
    title?: string
    gap?: string
}) => {

    return (
        <Stack flex={1} m={'0 auto'}>

            <Flex
                align={'center'}
                flex={1}
                zIndex={2}
                gap={gap}
            >
                {/* 1 */}
                <Stack align={'center'} justify={'start'} flex={1}>


                    <Stack gap={0} pl={{
                        base: 10,
                        md: 20
                    }}>

                        <Flex>
                            <Text
                                fontSize={{
                                    base: 'md',
                                    md: 'xl'
                                }}
                                color={'gray.300'}
                                style={{
                                    fontWeight: 'bolder',
                                }}
                                letterSpacing={'tight'}
                                m={0}
                                mt={-3}
                            >
                                Dark
                            </Text>
                            <Text
                                fontSize={{
                                    base: 'md',
                                    md: 'xl'
                                }}
                                color={'main.500'}
                                style={{
                                    fontWeight: 'bolder',
                                }}
                                letterSpacing={'tight'}
                                m={0}
                                mt={-3}
                            >
                                Tide
                            </Text>
                            <Text
                                fontSize={{
                                    base: 'md',
                                    md: 'xl'
                                }}
                                color={'gray.300'}
                                style={{
                                    fontWeight: 'bolder',
                                }}
                                letterSpacing={'tight'}
                                m={0}
                                mt={-3}
                            >
                                Studio
                            </Text>
                        </Flex>

                        <Text
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
                            mt={-3}
                        >
                            {title}
                        </Text>
                        {leftChildren}
                    </Stack>
                </Stack >
                {/* 2 */}
                <Flex flex={1}>
                    {
                        rightChildren
                    }
                </Flex >

            </Flex >
        </Stack>
    )
}

export default PageTitle