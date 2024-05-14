import React from 'react'
import { Button, ButtonVariant } from '../Button'
import { Waves } from 'lucide-react'
import { DebouncedSearchInput } from '../DebouncedSearchInput'

export default function Navigation() {
    return (
        <section>
            <nav>
                <ul className='flex justify-between bg-white items-center px-12 py-2 border-b-2 border-slate-300'>
                    <li className='flex items-center gap-2'> <Waves className='text-red-500' /><p className='text-zinc-700 font-bold text-lg'>Nucleus</p></li>
                    <div className='flex gap-2'>
                        <DebouncedSearchInput onSearchChange={(_: string) => { }} placeholder='Type to search...' />

                        <Button variant={ButtonVariant.TERTIARY}>Sign In</Button>
                        <Button>Subscribe</Button>
                    </div>
                </ul>
            </nav>
            <nav>
                <ul className='flex bg-white items-center px-12 py-2 gap-4'>
                    <li>Home</li>
                    <li>Watchlist</li>
                    <li>Portofolio</li>
                    <li>Markets</li>
                    <li>Forum</li>
                    <li>Commodities</li>
                    <li>Videos</li>
                    <li>Invest Now</li>
                </ul>
            </nav>
            <nav className='bg-slate-900 text-white'>
                <ul className='flex gap-4 items-center px-12 py-2'>
                    <li>Quote</li>
                    <li>Profile</li>
                    <li>Forecasts</li>
                    <li>Competitors</li>
                    <li>Financials</li>
                    <li>News</li>
                </ul>
            </nav>
        </section>
    )
}
