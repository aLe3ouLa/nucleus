import React from 'react'
import { Button, ButtonVariant } from '../Button'
import { Company } from '@/types/Company';

interface CompanyHeaderProps {
    company: Company;
}

export default function CompanyHeader({ company }: CompanyHeaderProps) {
    return (
        <section className='w-full'>
            <article className='flex items-start justify-between mb-4'>
                <div>
                    <h1 className='font-bold text-3xl mb-1'>{company.Name}</h1>
                    <p className='tracking-wide text-xs font-semibold mb-2'>{company.Symbol}:{company.Exchange}</p>
                    <p className='text-xs font-semibold text-slate-500'>RT Quote | Last NYSE Arca | VOL from CTA</p>
                </div>

                <div className='flex gap-1'>
                    <Button variant={ButtonVariant.TERTIARY}>Add to</Button>
                    <Button variant={ButtonVariant.SECONDARY}>Follow</Button>
                </div>
            </article>
            <hr />

            <article className='flex gap-12 items-center mt-4'>
                <div>
                    <h2 className='flex gap-4'><span className='text-lg font-bold'>200.45</span> <span className='text-green-600 font-bold'>+11.4</span> <span className='text-green-600 font-bold'>6.22%</span> <span className='font-bold'>Today</span></h2>
                    <p>Price At Close</p>
                    <p className='text-slate-500'>USD - 4:00PM ET - Feb 12, 2024 - Delayed </p>
                </div>
                <div>
                    <h2 className='flex gap-4'><span className='text-lg font-bold'>202.27</span> <span className='text-green-600 font-bold'>+1.82</span> <span className='text-green-600 font-bold'>0.91%</span></h2>
                    <p>Pre-Market Price</p>
                    <p className='text-slate-500'>USD - 4:00PM ET - Feb 12, 2024 - Delayed</p>
                </div>
            </article>
        </section>
    )
}
