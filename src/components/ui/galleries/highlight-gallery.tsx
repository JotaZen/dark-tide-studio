"use client";

import { Box, IconButton, Flex, Center, Stack } from "@chakra-ui/react";
import { useRef } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import InfoCard from "../cards/info-card";
import Image from "next/image";
import Overlay from "../bg/overlay";
import { projectRoutes, teamRoutes } from "@/routes/routes";
import { getRoute } from "@/helpers/routesHelper";
import HeadingGradient from "../text/heading-gradient";

const HighlightGallery = () => {
    const scrollContainerRef = useRef<HTMLDivElement | null>(null);

    // Función para desplazar el scroll horizontalmente
    const scroll = (direction:
        | "left"
        | "right"
    ) => {
        if (scrollContainerRef.current) {
            const scrollAmount = direction === "left" ? -window.innerWidth : window.innerWidth;
            scrollContainerRef.current.scrollBy({ left: scrollAmount / 2, behavior: "smooth" });
        }
    };

    return (
        <Box
            id="galeria-destacados"
            position="relative"
            w="100%"
            bgColor={"gray.800"}
        >
            <Box
                position="absolute"
                top={0}
                left={0}
                right={0}
                bottom={0}
                zIndex={0}
                className="glass-dark"
            />

            {/* Botón  */}

            <Box
                position="absolute"
                left={5}

                top={'20%'}
                bottom={'20%'}
                alignContent={'center'}
                aria-label="Scroll Left"
                onClick={(w) => {
                    w.stopPropagation();
                    scroll("left")
                }}
                cursor="pointer"
            >
                <IconButton
                    variant={"ghost"}
                    p={2}
                    py={20}
                    zIndex="1"
                    as={BsChevronLeft}
                    height={'20rem'}
                    colorPalette={'black'}
                />

            </Box>

            <Image
                src={'/img/bg/dark.jpg'}
                alt={'Hero Image 2'}
                layout={'fill'}
                objectFit={'cover'}
                objectPosition={'center'}

            />
            <Overlay />

            {/* Contenedor  */}

            <Stack
                id="galeria-destacados"
                position="relative"
                w="100%"
                py={'10rem'}
            >
                <Center>
                    <HeadingGradient size="2xl">
                        Destacados
                    </HeadingGradient>
                </Center>
                <Flex
                    ref={scrollContainerRef}
                    flex={1}
                    py={'3rem'}
                    overflowX="scroll"
                    scrollBehavior="smooth"
                    css={{
                        "&::-webkit-scrollbar": {
                            display: "none"
                        },
                    }}
                    position="relative"
                    gap={5}

                >
                    <Box px={8} />
                    <InfoCard
                        image="/img/team/Coal.png"
                        title="Coal Charcoal"
                        url={getRoute(teamRoutes.coal.path)}
                        badges={["Ilustrador", "Equipo"]}
                        description="Encargado de la ilustración y diseño de personajes"
                    />

                    <InfoCard
                        image="/img/projects/sotd/concept/visuals1.png"
                        badges={["Videojuegos", "Proyectos"]}
                        title="SOTD"
                        url={getRoute(projectRoutes.sotd.path)}
                        description="Sons of the Depths, un videojuego de survival horror"
                    />
                    <InfoCard
                        image="/img/projects/huaso-showdown/jam_sq.png"
                        badges={["Videojuegos", "JAM"]}
                        title="Huaso Showdown"
                        imageFit="contain"
                        imagePosition="center"
                        url={getRoute(projectRoutes.huasoShowdown.path)}
                        description="Boss Rush JAM con temática chilena"
                    />

                    <Box px={8} />

                </Flex>
            </Stack>
            {/* Botón  */}
            <Box
                position="absolute"
                right={5}
                top={'20%'}
                bottom={'20%'}
                alignContent={'center'}
            >
                <IconButton
                    variant={"ghost"}
                    p={2}
                    zIndex="1"
                    as={BsChevronRight}
                    aria-label="Scroll Right"
                    onClick={(w) => {
                        w.stopPropagation();
                        scroll("right")
                    }}
                    height={'20rem'}
                />
            </Box>
        </Box>
    );
};

export default HighlightGallery;
