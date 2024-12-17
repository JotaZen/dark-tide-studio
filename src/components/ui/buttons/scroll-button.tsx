"use client"
import { Center } from '@chakra-ui/react';
import React from 'react'
import { BsChevronDown } from 'react-icons/bs';

const ScrollButton = ({
    top
}: {
    top?: number
}) => {
    return (
        <Center
            zIndex={3}
            pb={10}
            color={'main.500'}
            onClick={() => {
                window.scrollTo({
                    top: top ?? window.innerHeight,
                    behavior: 'smooth'
                });
            }}
            transition={'all 0.3s'}
            _hover={{
                color: 'white',
                cursor: 'pointer'
            }}
        >
            <BsChevronDown
                size={50}
            />
        </Center>
    )
}

export default ScrollButton