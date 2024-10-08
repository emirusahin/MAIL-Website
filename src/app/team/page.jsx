import teamMembers from '../../data/teamMembers.json';
import Image from 'next/image';

export default function Team() {
    return (
        <>
            <h1 className="font-Inter text-white sm:text-5xl lg:text-8xl text-center">The Team</h1>
            <div className="flex flex-col items-center my-10">
                <div className="flex flex-wrap justify-center gap-6">
                    {teamMembers.map((member, index) => (
                        <div 
                            key={index} 
                            className="bg-gray-800 text-white rounded-lg p-4 w-80">
                            <Image 
                                src={member.image} 
                                alt={member.name} 
                                className="w-full h-64 object-cover rounded-lg mb-4" 
                            />
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
