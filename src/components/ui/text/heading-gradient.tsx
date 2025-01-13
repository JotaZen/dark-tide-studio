import { Box, Heading } from '@chakra-ui/react'
import React from 'react'

const HeadingGradient = ({
    children,
    size = "4xl"
}: {
    children?: React.ReactNode
    size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl"
}) => {
    return (
        <Box>
            <Heading
                fontWeight={"extrabold"}
                size={size}
                backgroundImage="linear-gradient(to right, var(--chakra-colors-main-300), var(--chakra-colors-main-500))"
                bgClip="text"
                display={"inline-block"}
            >
                {children}
            </Heading>
        </Box>
    )
}

export default HeadingGradient