import { Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

const Logo = ({
    inverted,
}: {
    inverted?: boolean
}) => {
    return (
        <Flex align={'center'} justify={'center'} position={'relative'} gap={1}>
            <Image
                src={'/img/logo.png'}
                alt={'Logo'}
                width={50}
                height={50}
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
                >
                    Studio
                </Text>
            </Flex>
        </Flex>
    )
}

export default Logo