"use client";

import React, { useEffect, useState } from 'react'
import NavBar from './nav-bar/nav-bar'
import useScroll from '@/hooks/ui/useScroll'
import { Box, IconButton, Separator, useBreakpointValue, } from '@chakra-ui/react';
import { BsChevronUp } from 'react-icons/bs';
import Footer from './footer';
import 'react-photo-view/dist/react-photo-view.css';

import LoadingBar from "react-top-loading-bar";
import { PhotoProvider } from 'react-photo-view';

import { usePathname, useSearchParams } from 'next/navigation';


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


    const pathname = usePathname();


    const [progress, setProgress] = useState(0);


    useEffect(() => {
        setProgress(30);
        const timeout = setTimeout(() => {
            setProgress(100);
        }, 300);

        return () => clearTimeout(timeout);
    }, [pathname]);

    const isMobile = useBreakpointValue({
        base: true,
        md: false
    })

    return (
        <>

            <LoadingBar color="#0082b3" progress={progress} onLoaderFinished={() => setProgress(0)} />

            <NavBar
                showMenu
                isScrolled={isScrolled && scrollableNavbar}
                position={(scrollableNavbar) ? 'fixed' : 'sticky'}
                setDrawerOpen={setDrawerOpen}
            />
            <Box as={'nav'}>
                {drawerOpen && <></>}
            </Box>



            <Box
                as={'main'}
                px={(!isMobile && drawerOpen && !isScrolled) ? 5 : 0}
                pt={(!isMobile && drawerOpen && !isScrolled) ? 5 : 0}
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