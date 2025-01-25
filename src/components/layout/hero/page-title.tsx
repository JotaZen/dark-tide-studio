import { BoxReveal } from '@/components/ui/box-reveal'
import HeadingGradient from '@/components/ui/text/heading-gradient'
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

                    {title && <BoxReveal boxColor={"white"} duration={0.4}>
                        <Flex>
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
                                color={'main.400'}
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
                        </Flex>
                    </BoxReveal>
                    }
                    <BoxReveal boxColor={"var(--chakra-colors-main-500)"} duration={0.4}>
                        <HeadingGradient
                            size={{
                                base: '3xl',
                                md: '5xl'
                            }}
                        >
                            {title}
                        </HeadingGradient>
                    </BoxReveal>
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