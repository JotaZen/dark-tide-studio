import { Box } from '@chakra-ui/react'
import React from 'react'

const Overlay = () => {
    return (
        < Box
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                zIndex: 1,
            }
            }
        />
    )
}

export default Overlay