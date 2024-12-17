import React from 'react'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

const MasonryGrid = ({
    children,
    xlCols = 3,
}: {
    children: React.ReactNode
    xlCols?: number
}) => {
    return (
        <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: xlCols }}
        >
            <Masonry>
                {children}
            </Masonry>
        </ResponsiveMasonry>
    )
}

export default MasonryGrid