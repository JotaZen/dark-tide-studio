import Carousel from "react-multi-carousel";

import React from 'react'

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const ICarousel = ({
    items
}: {
    items: React.ReactNode[]
}) => {
    return <Carousel
        responsive={responsive}
        containerClass="carousel-container"
    >
        {
            items.map((item, index) => (
                <React.Fragment key={index}>
                    {item}
                </React.Fragment>
            ))
        }
    </Carousel>;
}

export default ICarousel

