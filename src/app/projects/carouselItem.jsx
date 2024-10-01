import '../globals.css';

export default function CarouselItem({ title, date, image }) {
    return (
        <div className='min-w-[25vw] h-auto p-6 glassmorph flex flex-col items-center'> {/* Added flex and items-center */}
            <div className="flex justify-center pb-5 overflow-hidden w-64 h-80">
                <img src={image} className='rounded-lg w-full h-full object-cover' alt={title} />
            </div>
            <div className="flex flex-col items-left justify-end"> {/* Changed items-start to items-center */}
                <div className='text-white text-3xl'>{title}</div> {/* Added text-center for title */}
                <div className='text-white text-xl'>{date}</div> {/* Added text-center for date */}
            </div>
        </div>
    );
}
