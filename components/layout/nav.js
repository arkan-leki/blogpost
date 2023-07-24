import React from 'react'
import Logo from './logo'
import Link from 'next/link'

function Nav() {
    return (
        <header className='header'>
            <Link href="/">
                    <Logo />
            </Link>
            <nav>
                <ul>
                    <li><Link href="/posts">Posts</Link></li>
                    <li><Link href="/contacts">Contacts</Link></li>

                </ul>
            </nav>
        </header>
    )
}

export default Nav