'use client';
import { usePathname, useRouter } from 'next/navigation';

export default function Navitem({ label, id, color }) {
    const pathname = usePathname();
    const router = useRouter();

    const handleNavigation = (id) => {
        if (pathname === "/") { // On home page
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
        else if (pathname === "/" + id){ // Current page
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        else { // Other page
            router.push('/' + id);
            console.log(id)
        }
    };

    return (
        <li>
            <button 
                onClick={() => handleNavigation(id)} 
                className={`text-xl text-${color} lg:px-5 cursor-pointer`}
            >
                {label}
            </button>
        </li>
    );
}
