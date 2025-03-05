"use client";

import Slider from "react-slick";
import EventCard from "./EventCard/EventCard";

const EventCarousel = ({ events }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="mx-auto px-4 py-8">
            <Slider {...settings}>
                {events?.map((event, index) => (
                    <EventCard 
                        key={index} 
                        title={event.title}
                        description={event.description}
                        image={event.image}
                        uri={event.uri}
                    />
                ))}
            </Slider>
        </div>
    );
};

export default EventCarousel;