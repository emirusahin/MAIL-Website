'use client';
import { useState } from 'react';


export default function About(){
    const  [animation, setAnimation] = useState('');

    const text = `
        McGill AI Lab is a student-led initiative at McGill University. Our goal is to apply our theoretical knowledge to wide variety of real world problems (or musings). From identifying pain biomarkers in EEG data to predicting McGill students’ academic major based on their clothing style, our work spans diverse research areas. 
    `;


    return (
        <div className={`text-black text-md ${animation} hidden sm:block`}>{ text }</div>
    );
}