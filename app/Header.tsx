import Link from 'next/link';
import React from 'react';

export default function Header() {
    return (
        <div className='navBar'>
            <Link href='/'>Home</Link>
            <Link href='/recipes'>Recipes</Link>
            <Link href='/add'>Add</Link>
        </div>
    );
}
