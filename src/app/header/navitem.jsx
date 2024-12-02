'use client';
import { usePathname, useRouter } from 'next/navigation';

export default function Navitem({ label, id, color, link }) {
    const pathname = usePathname();
    const router = useRouter();

    if (link) {
        return (
            <li>
                <button 
                    onClick={() => window.location.href = "mailto:mcgillailab@gmail.com"} 
                    className={`text-xl text-${color} lg:px-5 cursor-pointer`}
                >
                    {label}
                </button>
            </li>
        )
    }
    const handleNavigation = (id) => {
        if (pathname === "/") { // On home page

            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
            else {
                router.push('/' + id);
            }
            
        }
        else if (pathname === "/" + id){ // Current page
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        else { // Other page
            router.push('/' + id);
        }
    };

    return (
        <li>
            <button 
                onClick={() => handleNavigation(id)} 
                className={`text-xl text-${color} px-2 md:px-8 lg:px-10 cursor-pointer`}
            >
                {label}
            </button>
        </li>
    );
}
