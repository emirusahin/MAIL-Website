"use client";

import Image from "next/image";
import teamMembers from "../../data/teamMembers.json";

export default function Team() {

  const exec2025Names = [
    "Emir Sahin",
    "Dowoo Kim",
    "Taimaa Bachi",
    "Skylar Gu",
    "Karen Chen Lai",
    "Sebastien Renard",
    "Madeleine Garnett",
    "Megha Lal",
    "Sabrina Qureshi",
    "Anna Hunt-Isaak",
    "Kori Zhang",
    "Gabriel d’Hauteville"
  ];

  const exec2024Names = [
    "Emir Sahin",
    "Steven Thao",
    "William Kiem Lafond",
    "Dowoo Kim",
    "Jacob Leader",
    "Taimaa Bachi",
    "Ezra Huang",
    "Jonathan Lamontagne Kratz",
    "Skylar Gu"
  ];

  const exec2025 = teamMembers.filter((member) =>
    exec2025Names.includes(member.name)
  );

  const exec2024 = teamMembers.filter((member) =>
    exec2024Names.includes(member.name)
  );

  const renderGrid = (list) => (
    <div className="flex justify-center my-10">
      <div className="grid grid-cols-4 gap-4">
        {list.map((member, index) => (
          <div
            key={`${member.name}-${index}`}
            className="bg-gray-800 text-black rounded-lg p-1 w-80"
          >
            <div className="
                relative h-80 w-full mb-4 rounded-xl overflow-hidden
                transition-transform duration-300
                hover:scale-105
            ">
              <Image
                src={member.image}
                alt={member.name}
                layout="fill" 
                objectFit="cover"
                priority={index < 9}
              />
            </div>

            {/* ORIGINAL TEXT STYLING */}
            <h3 className="text-xl font-semibold text-black">{member.name}</h3>
            <p className="text-sm">{member.role}</p>
            <p className="text-sm">{member.year} {member.major}</p>

          </div>
        ))}
      </div>
    </div>
  );

  return (
    <main className="min-h-screen py-16 px-4">

      {/* SECTION 1 — 2025 EXEC */}
      <h1 className="font-Inter text-black sm:text-5xl lg:text-5xl text-center">
        2025–2026 Exec Team
      </h1>
      {renderGrid(exec2025)}

      {/* SEPARATOR */}
      <div className="my-20 border-b border-gray-400 w-3/4 mx-auto"></div>

      {/* SECTION 2 — 2024 EXEC */}
      <h1 className="font-Inter text-black sm:text-5xl lg:text-5xl text-center">
        2024–2025 Exec Team
      </h1>
      {renderGrid(exec2024)}

    </main>
  );
}