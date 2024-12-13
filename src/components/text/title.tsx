import { Title } from '@mantine/core'
import React from 'react'

const title = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return (
        <Title >
            {children}
        </Title>
    )
}

export default title