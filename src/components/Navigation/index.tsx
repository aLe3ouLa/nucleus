import React from 'react'
import { Button, ButtonVariant } from '../Button'
import { Waves } from 'lucide-react'
import { DebouncedSearchInput } from '../DebouncedSearchInput'

export default function Navigation() {
    return (
        <nav >
            <ul className='flex justify-between bg-slate-100 items-center px-5 py-2'>
                <li className='flex items-center gap-2'> <Waves className='text-red-500' /><p className='text-zinc-700 font-bold text-lg'>Nucleus</p></li>
                <div className='flex gap-2'>
                    <DebouncedSearchInput onSearchChange={(_: string) => { }} placeholder='Type to search...' />

                    <Button variant={ButtonVariant.TERTIARY}>Sign In</Button>
                    <Button>Subscribe</Button>
                </div>
            </ul>
        </nav>
    )
}
