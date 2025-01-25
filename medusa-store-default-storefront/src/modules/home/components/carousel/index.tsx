"use client";

import { Button } from "@headlessui/react";
import { useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

interface CarouselProps {
    children: React.ReactNode
    isDisabledButtons?: boolean
    autoplay?: boolean
    speed?: number
}

export const Carousel: React.FC<CarouselProps> = ({
    children,
    isDisabledButtons,
    autoplay = false,
    speed = 3000,
}) => {
    const containerRef = useRef<HTMLDivElement | null>(null)
    const intervalRef = useRef<NodeJS.Timeout | null>(null)

    const scrollLeft = () => {
        if (containerRef.current) {
            containerRef.current.scrollBy({
                left: -330,
                behavior: "smooth",
            })
        }
    }

    const scrollRight = () => {
        if (containerRef.current) {
            const container = containerRef.current;
            const scrollWidth = container.scrollWidth;
            const clientWidth = container.clientWidth;

            if (container.scrollLeft + clientWidth >= scrollWidth) {
                container.scrollTo({ left: 0, behavior: "smooth" })
            } else {
                container.scrollBy({ left: 330, behavior: "smooth" })
            }
        }
    }

    const startAutoplay = () => {
        if (autoplay && containerRef.current) {
            intervalRef.current = setInterval(() => {
                scrollRight()
            }, speed)
        }
    }

    const stopAutoplay = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current)
        }
    };

    useEffect(() => {
        if (autoplay) {
            startAutoplay()
        }
        return () => stopAutoplay()
    }, [autoplay, speed])

    return (
        <div className={`relative flex w-full items-center my-16 ${!isDisabledButtons && "px-4"}`}>
            {!isDisabledButtons && (
                <Button
                    className="absolute left-2 flex justify-center items-center p-2 bg-gray-300/80 hover:bg-gray-200 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
                    onClick={scrollLeft}
                >
                    <FaChevronLeft className="text-xl hover:text-2xl transition-all duration-200" />
                </Button>
            )}

            <div
                ref={containerRef}
                className="flex w-full overflow-x-auto gap-4 py-2 scrollbar-hide scroll-smooth"
            >
                {children}
            </div>

            {!isDisabledButtons && (
                <Button
                    className="absolute right-2 flex justify-center items-center p-2 bg-gray-300/80 hover:bg-gray-200 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
                    onClick={scrollRight}
                >
                    <FaChevronRight className="text-xl hover:text-2xl transition-all duration-200" />
                </Button>
            )}
        </div>
    );
};
