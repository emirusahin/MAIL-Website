'use client';
import { usePathname, useRouter } from 'next/navigation';
import { motion } from 'framer-motion'; // For animations

export default function Navitem({ label, id, color, link }) {
    const pathname = usePathname();
    const router = useRouter();

    if (link) {
        return (
            <li className="relative">
                <motion.button
                    onClick={() => (window.location.href = "mailto:mcgillailab@gmail.com")}
                    className={`text-xl text-${color} px-4 lg:px-6 cursor-pointer relative z-10`}
                    whileHover={{ scale: 1.05, color: '#ed1b2f' }} // mcgill red
                    transition={{ duration: 0.2 }}
                >
                    {label}
                    {/* Pulse effect */}
                    <motion.span
                        className="absolute inset-0 -z-10 bg-emerald-500/20 rounded-full"
                        initial={{ scale: 0, opacity: 0 }}
                        whileHover={{ scale: 2.5, opacity: 0.5 }}
                        transition={{ duration: 0.4 }}
                    />
                </motion.button>
            </li>
        );
    }

    const handleNavigation = (id) => {
        if (pathname === '/') {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            } else {
                router.push('/' + id);
            }
        } else if (pathname === '/' + id) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            router.push('/' + id);
        }
    };

    // Check if this is the active page
    const isActive = pathname === '/' + id || (pathname === '/' && id === 'home');

    return (
        <li className="relative">
            <motion.button
                onClick={() => handleNavigation(id)}
                className={`text-xl text-${color} px-4 md:px-6 lg:px-8 cursor-pointer relative z-10`}
                whileHover={{ scale: 1.05, color: '#ed1b2f' }} // mcgill red
                transition={{ duration: 0.2 }}
            >
                {label}
                <motion.span
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-500 origin-left"
                    initial={{ scaleX: isActive ? 1 : 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                />
                <motion.span
                    className="absolute inset-0 -z-10 bg-emerald-500/20 rounded-full"
                    initial={{ scale: isActive ? 1.5 : 0, opacity: isActive ? 0.3 : 0 }}
                    whileHover={{ scale: 2.5, opacity: 0.5 }}
                    transition={{ duration: 0.4 }}
                />
            </motion.button>
        </li>
    );
}