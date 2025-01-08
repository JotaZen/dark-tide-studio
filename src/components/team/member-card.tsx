"use client"

import { Badge, Box, Button, Card, Center, HStack } from '@chakra-ui/react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Tooltip } from '../ui/tooltip'
import { getRoute } from '@/helpers/routesHelper'
import { useRouter } from 'next/navigation'

const MemberCard = ({
    image,
    name,
    description,
    roles,
    contact,
    id,
    compact
}: {
    image: string
    name: string
    description?: string
    roles: string[]
    id: string
    contact: {
        url: string
        icon: React.ReactNode
        text: string
        color?: string
        variant?: "solid" | "outline" | "ghost" | undefined
        tooltip?: string
    }[]
    compact?: boolean
}) => {
    const [mounted, setMounted] = useState(false);

    const router = useRouter()
    const perfilNavigation = (e: React.MouseEvent) => {
        e.preventDefault()
        e.stopPropagation()
        if (mounted) {
            router.replace(getRoute('/team', "/" + id))
        }
    }

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null
    return (

        <Card.Root
            flexDirection={
                {
                    md: 'row'
                }
            }
            height={'100%'}
            overflow="hidden"
            border={'none'}
            borderRadius={'xl'}
            maxW="xl"
            onClick={perfilNavigation}
            className='glass-dark'
            // bgColor={'rgba(0,0,0,0.05)'}
            transition="all 0.3s"
            boxShadow={'lg'}
            _hover={{
                bgColor: 'rgba(0,0,0)',
                cursor: 'pointer',
                scale: 1.01
            }}
        >
            {image && <Box w={
                {
                    base: '100%',
                    md: '16rem'
                }
            }
                h={
                    {
                        base: '15rem',
                        md: 'auto'
                    }
                } position="relative">

                {
                    compact
                        ? <Center p={5} borderRadius={'full'} alignContent={'center'} alignItems={'center'} flex={1} height={'100%'}>
                            <Image
                                objectFit="cover"
                                width={50}
                                height={50}
                                src={image}
                                alt={name + ' image'}
                            />
                        </Center>
                        : <Image
                            objectFit="cover"
                            layout="fill"
                            src={image}
                            alt={name + ' image'}
                        />
                }
                <Box

                    position="absolute"
                    top="0"
                    left="0"
                    right="0"
                    bottom="0"
                />
            </Box>}
            <Box>
                <Card.Body>
                    <Card.Title mb="2">
                        {name}
                    </Card.Title>
                    <Card.Description>
                        {description}
                    </Card.Description>
                    <HStack mt="4">
                        {roles.map(role => (
                            <Badge key={role}>{role}</Badge>
                        ))}
                    </HStack>
                </Card.Body>
                {!compact && <Card.Footer>
                    {
                        contact.map((contact, index) => (
                            <a key={index} href={contact.url} target="_blank" rel="noreferrer">
                                <Tooltip content={contact.tooltip || contact.text} showArrow immediate positioning={{ placement: 'right' }}>
                                    <Button
                                        colorPalette={contact.color}
                                        variant={contact.variant}
                                        size={'sm'}
                                        onClick={(e) => contact.url && e.stopPropagation()}
                                    >
                                        {contact.icon}{contact.text && <>&nbsp;</>}{contact.text}
                                    </Button>
                                </Tooltip>
                            </a>
                        ))
                    }
                </Card.Footer>}
            </Box>

        </Card.Root>
    )
}

export default MemberCard