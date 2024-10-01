import Link from 'next/link';

export default function Navitem({ label, href, color }) {
    return (
        <li>
            <Link href={href} className={`text-xl text-${color} lg:px-5`}>
                {label}
            </Link>
        </li>
    );
}
