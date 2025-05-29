'use client';
import { useState } from 'react';


export default function About(){
    const  [animation, setAnimation] = useState('');

    const text = `
        McGill AI Lab is a student-led initiative at McGill University. Our lab consists of undergraduate and graduate students interested in theoretical AI research or applying existing models to novel problems.  

        If you're a student interested in joining, click the Join button in the upper right corner.

        We're also looking for faculty advisors and sponsors. If you're interested, please contact us at mcgillailab@gmail.com.
    `;


    return (
        <div className={`text-black text-md ${animation} hidden sm:block whitespace-pre-line`}>
            {text.split('mcgillailab@gmail.com').map((part, index, array) => {
                if (index === array.length - 1) {
                    return part;
                }
                return (
                    <span key={index}>
                        {part}
                        <a href="mailto:mcgillailab@gmail.com" className="text-blue-600 hover:underline">
                            mcgillailab@gmail.com
                        </a>
                    </span>
                );
            })}
        </div>
    );
}