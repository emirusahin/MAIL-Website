import React from 'react';
import teamMembers from '../../data/teamMembers.json';


function ArrowRow({teamMembers}) {
    return(
        <div className='flex flex-col justify-center items-center w-full'>
            {teamMembers.map((member, index) => (
                <div key={index} className="rounded-lg p-1 w-28 cursor-pointer">
                    <img 
                        src={member.image} 
                        alt={`Team Member ${index + 1}`} 
                        className="w-full h-24 object-cover rounded-md" 
                    />
                </div>
            ))}
        </div>
    );
}

export default function TeamSection() {
      return (
        <div className="flex flex-row items-center my-10">
            <div className="flex flex-col justify-center pl-8 w-1/4">
                <h1 className="font-Inter text-white sm:text-5xl lg:text-10xl text-center">The<br />Team</h1>
            </div>
            <div onClick="TODO" className='flex flex-row w-3/4 pl-52'>
                <div className='flex flex-row justify-start items-center w-full'>
                    {teamMembers.slice(0, 4).map((member, index) => (
                        <div key={index} className="bg-gray-900 rounded-lg p-1 w-28">
                            <img 
                                src={member.image} 
                                className="w-full h-24 object-cover rounded-md cursor-pointer" 
                            />
                        </div>
                    ))}
                </div>
                    <ArrowRow teamMembers={teamMembers.slice(4, 10)} />
                    <ArrowRow teamMembers={teamMembers.slice(10, 14)} />
                    <ArrowRow teamMembers={teamMembers.slice(14, 16)} />
                <div className='flex flex-col justify-center items-center w-full'>
                    <div className="rounded-lg p-1 w-28">
                        <img 
                            src={teamMembers[6].image} 
                            className="w-full h-24 object-cover rounded-md cursor-pointer" 
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}



// <>
        //     <h1 className="font-Inter text-white sm:text-5xl lg:text-7xl pl-8 pb-4">The Team</h1>
        //     <div className="flex flex-col items-center my-10 pl-4">
        //         {/* Set horizontal scrolling with overflow-x-auto */}
        //         <div className="overflow-x-auto whitespace-nowrap max-w-full">
        //             <div className="inline-flex">
        //                 {teamMembers.map((member, index) => (
        //                     <div key={index} className="bg-gray-800 text-white rounded-lg p-4 mx-2 w-80">
        //                         <img src={member.image} alt={member.name} className="w-full h-64 object-cover rounded-lg mb-4" />
        //                         <h3 className="text-xl font-semibold">{member.name}</h3>
        //                         <p className="text-sm">{member.year} {member.major}</p>
        //                         <p className="text-sm">{member.role}</p>
        //                     </div>
        //                 ))}
        //             </div>
        //         </div>
        //     </div>
        // </>
