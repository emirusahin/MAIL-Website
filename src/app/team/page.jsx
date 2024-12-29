import teamMembers from '../../data/teamMembers.json';
import Image from 'next/image';

export default function Team() {
    return (
        <>
            <h1 className="font-Inter text-black sm:text-5xl lg:text-8xl text-center">Execs</h1>
            
            {/* Outer div centers everything */}
            <div className="flex justify-center my-10">
                {/* Inner div aligns columns to the left */}
                <div className="grid grid-cols-4 gap-4">
                    {teamMembers.slice(0, 9).map((member, index) => (
                        <div 
                            key={index} 
                            className="bg-gray-800 text-black rounded-lg p-1 w-80">
                            <div className="relative w-full h-64 mb-4">
                                <Image
                                    src={member.image} 
                                    alt={`Photo of ${member.name}, McGill AI Lab executive who has the role of ${member.role}`}
                                    className="object-cover rounded-lg" 
                                    layout="fill" 
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
