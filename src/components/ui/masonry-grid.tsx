import React from 'react'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

const MasonryGrid = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}

        >
            <Masonry>
                {children}
            </Masonry>
        </ResponsiveMasonry>
    )
}

export default MasonryGrid