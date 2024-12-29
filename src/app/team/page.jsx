import teamMembers from '../../data/teamMembers.json';
import Image from 'next/image';

export default function Team() {
    return (
        <>
            <h1 className="font-Inter text-black sm:text-5xl lg:text-8xl text-center">Execs</h1>
            <div className="flex flex-col items-center my-10">
                <div className="flex flex-wrap justify-center gap-4">
                    {teamMembers.map((member, index) => (
                        <div 
                            key={index} 
                            className="bg-gray-800 text-black rounded-lg p-1 w-80">
                            <div className="relative w-full h-64 mb-4">
                                <Image
                                    src={member.image} 
                                    alt={member.name} 
                                    className="object-cover rounded-lg" 
                                    layout="fill" 
                                    // objectFit="cover" 
                                    priority={index < 9}
                                />
                            </div>
                            <h3 className="text-xl font-semibold">{member.name}</h3>
                            <p className="text-sm">{member.year} {member.major}</p>
                            <p className="text-sm">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
