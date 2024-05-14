import React from 'react'
import { Button, ButtonVariant } from '../Button'

interface DetailsHeaderProps {
    companyName: string;
}

export default function DetailsHeader({ companyName }: DetailsHeaderProps) {
    return (
        <section className='w-full'>
            <div className='flex items-start justify-between'>
                <article>
                    <h1 className='text-xl font-bold'>{companyName}</h1>
                    <p className='tracking-wide text-xs font-semibold mb-2'>TSLA:NASDAQ</p>
                    <p className='text-sm text-slate-500'>RT Quote | Last NYSE Arca | VOL from CTA</p>
                </article>

                <div className='flex gap-1'>
                    <Button variant={ButtonVariant.TERTIARY}>Add to</Button>
                    <Button variant={ButtonVariant.SECONDARY}>Follow</Button>
                </div>


            </div>

        </section>
    )
}
