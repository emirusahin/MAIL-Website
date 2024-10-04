'use client';

const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
};

export default function Navitem({ label, id, color }) {
    return (
        <li>
            <button 
                onClick={() => {scrollToSection(id);}} className={`text-xl text-${color} lg:px-5`}>
                {label}
            </button>
        </li>
    );
}
