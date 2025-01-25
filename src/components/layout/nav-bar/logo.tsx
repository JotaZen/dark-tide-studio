import { Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

const Logo = ({
    inverted,
}: {
    inverted?: boolean
}) => {
    return (
        <Flex
            align={'center'}
            justify={'center'}
            position={'relative'}
            gap={1}
            _hover={{
                '& > div > *': { // Selecciona los hijos del segundo Flex
                    color: 'main.600',
                },
            }}
        >
            <Image
                src={'/img/logo.png'}
                alt={'Logo'}
                width={40}
                height={40}
            />

            <Flex>
                <Text
                    textAlign={'center'}
                    fontSize={'lg'}
                    color={inverted ? 'main.600' : 'gray.200'}
                    style={{
                        marginLeft: '.35rem',
                        fontWeight: 'bolder',
                    }}
                    letterSpacing={'tight'}
                    m={0}
                    transition={'color 0.5s, underline 0.5s'}
                >
                    Dark
                </Text>
                <Text
                    textAlign={'center'}
                    fontSize={'lg'}
                    color={'main.500'}
                    style={{
                        fontWeight: 'bolder',
                    }}
                    letterSpacing={'tight'}
                    m={0}
                    transition={'color 0.5s, underline 0.5s'}

                >
                    Tide
                </Text>
                <Text
                    textAlign={'center'}
                    fontSize={'lg'}
                    color={inverted ? 'main.600' : 'gray.200'}
                    style={{
                        fontWeight: 'bolder',
                    }}
                    letterSpacing={'tight'}
                    m={0}
                    transition={'color 0.5s'}
                >
                    Studio
                </Text>
            </Flex>
        </Flex>
    )
}

export default Logo