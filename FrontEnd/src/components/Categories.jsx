import React from 'react';
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "./ui/carousel"


const Categories = () => {
    return (
        <div className="flex justify-center space-x-4 bg-gray-100 dark:bg-zinc-800 ">
            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full max-w-sm mt-5 text-center"
            >
                <CarouselPrevious />
                <CarouselContent>
                    <CarouselItem className="md:basis-1/3 lg:basis-1/3">
                        <div className="p-1">
                            <Card>
                                <CardContent className="flex aspect-square items-center justify-center p-6">
                                    <span className="text-xl font-semibold">Grande</span>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                    
                    <CarouselItem className="md:basis-1/3 lg:basis-1/3">
                        <div className="p-1">
                            <Card>
                                <CardContent className="flex aspect-square items-center justify-center p-6">
                                    <span className="text-xl font-semibold">Petite</span>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/3 lg:basis-1/3">
                        <div className="p-1">
                            <Card>
                                <CardContent className="flex aspect-square items-center justify-center p-6" style={{ backgroundImage: "url('')" }}>
                                    <span className="text-xl font-semibold" >SUV</span>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                </CarouselContent>
                

            </Carousel>
            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full max-w-sm mt-5 text-center"
            >

                <CarouselContent>
                    <CarouselItem className="md:basis-1/3 lg:basis-1/3">
                        <div className="p-1">
                            <Card>
                                <CardContent className="flex aspect-square items-center justify-center p-6">
                                    <span className="text-xl font-semibold">Luxe</span>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/3 lg:basis-1/3">
                        <div className="p-1">
                            <Card>
                                <CardContent className="flex aspect-square items-center justify-center p-6">
                                    <span className="text-xl font-semibold">Breaks</span>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/3 lg:basis-1/3">
                        <div className="p-1">
                            <Card>
                                <CardContent className="flex aspect-square items-center justify-center p-6">
                                    <span className="text-xl font-semibold">Monospace</span>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                </CarouselContent>
                
                <CarouselNext />
            </Carousel>
        </div>
    );
};

export default Categories;
