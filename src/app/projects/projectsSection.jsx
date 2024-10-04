import CarouselItem from "./carouselItem";

export default function Carousel() {
    return (
        <>
            <h1 className="font-Inter text-white sm:text-5xl lg:text-7xl pl-8 pb-4">Projects</h1>
            <div className="carousel bg-none rounded-box w-full space-x-4 p-4 pl-8 overflow-auto">
                <CarouselItem title="Student Major Predictor" date="Sept 12. 2024" image="/images/major-predictor-cover.png"/>
                <CarouselItem title="Student Major Predictor" date="Sept 12. 2024" image="/images/major-predictor-cover.png"/>
                <CarouselItem title="Student Major Predictor" date="Sept 12. 2024" image="/images/major-predictor-cover.png"/>
                <CarouselItem title="Student Major Predictor" date="Sept 12. 2024" image="/images/major-predictor-cover.png"/>
                <CarouselItem title="Student Major Predictor" date="Sept 12. 2024" image="/images/major-predictor-cover.png"/>
                <CarouselItem title="Student Major Predictor" date="Sept 12. 2024" image="/images/major-predictor-cover.png"/>
                <CarouselItem title="Student Major Predictor" date="Sept 12. 2024" image="/images/major-predictor-cover.png"/>
                {/* <CarouselItem title="Student Major Predictor" date="Sept 12. 2024" image="/images/major-predictor-cover.png"/>
                <CarouselItem title="Student Major Predictor" date="Sept 12. 2024" image="/images/major-predictor-cover.png"/>
                <CarouselItem title="Student Major Predictor" date="Sept 12. 2024" image="/images/major-predictor-cover.png"/>
                <CarouselItem title="Student Major Predictor" date="Sept 12. 2024" image="/images/major-predictor-cover.png"/>
                <CarouselItem title="Student Major Predictor" date="Sept 12. 2024" image="/images/major-predictor-cover.png"/>
                <CarouselItem title="Student Major Predictor" date="Sept 12. 2024" image="/images/major-predictor-cover.png"/>
                <CarouselItem title="Student Major Predictor" date="Sept 12. 2024" image="/images/major-predictor-cover.png"/> */}
            </div> 
        </>
        );
}