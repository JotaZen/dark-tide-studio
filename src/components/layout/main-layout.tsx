"use client";

import React, { useState } from 'react'
import NavBar from './nav-bar/nav-bar'
import useScroll from '@/hooks/ui/useScroll'
import { Box, IconButton, Separator } from '@chakra-ui/react';
import { BsChevronUp } from 'react-icons/bs';
import Footer from './footer';
import 'react-photo-view/dist/react-photo-view.css';

import { PhotoProvider } from 'react-photo-view';

import { useSearchParams } from 'next/navigation';


const MainLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    const { isScrolled } = useScroll()

    const params = useSearchParams()

    const scrollableNavbar = params.get('no_scroll') !== '1'


    // Nav
    const [drawerOpen, setDrawerOpen] = useState(false)

    return (
        <>

            <NavBar
                isScrolled={isScrolled && scrollableNavbar}
                position={(scrollableNavbar) ? 'fixed' : 'sticky'}
                setDrawerOpen={setDrawerOpen}
            />
            <Box as={'nav'}>
            </Box>

            <Box
                as={'main'}
                px={drawerOpen ? 5 : 0}
                pt={drawerOpen ? 5 : 0}
                transition={'padding 0.3s'}
            >
                <PhotoProvider>
                    {children}
                </PhotoProvider>
            </Box>


            <Separator borderColor={'gray.800'} />
            <Footer
                navBar={
                    <NavBar
                        setDrawerOpen={setDrawerOpen}
                        isScrolled={false} position='relative'
                    />
                }
            />

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