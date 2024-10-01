import Link from 'next/link';

export default function Navitem({ label, href }) {
    return (
        // <Link href={ href }>{ label }</Link>
        <li>
            <Link href={href} className='text-xl text-white lg:px-5'>
                {label}
            </Link>
        </li>
    );
}