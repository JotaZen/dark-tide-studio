"use client";

import React from 'react'
import NavBar from './nav-bar/nav-bar'
import useScroll from '@/hooks/ui/useScroll'
import { IconButton, Separator } from '@chakra-ui/react';
import { BsChevronUp } from 'react-icons/bs';
import Footer from './footer';


const MainLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    const { isScrolled } = useScroll()


    return (
        <>
            <NavBar isScrolled={isScrolled} />
            {children}


            <Separator borderColor={'gray.200'} />
            <Footer />

            <IconButton
                position={'fixed'}
                bottom={4}
                right={4}
                size={'lg'}
                rounded={'full'} p={3}
                hidden={!isScrolled}
                opacity={isScrolled ? 1 : 0}
                transition={'opacity 1s'}
                zIndex={999}
                as={BsChevronUp}
                onClick={() => {
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    })
                }}
            />
        </>
    )
}

export default MainLayout