import { Company } from '@/types/Company'
import React from 'react'

export default function CompanyDetails({ company }: { company: Partial<Company> }) {
    return (
        <section className='w-full'>
            <h2 className='text-2xl font-bold mb-4'>Company Profile</h2>
            <div className='flex gap-4'>
                <article className='bg-slate-200 p-4 mb-2'>
                    <h3 className='text-xl font-bold'>{company.Name}</h3>
                    <hr />
                    <p className='text-xs mt-2'>Address</p>
                    <p>{company.Address}</p>
                    <div className='flex gap-4 mt-2'>
                        <div>
                            <p className='text-xs'>Industry</p>
                            <p>{company.Industry}</p>
                            <p className='text-xs mt-2'>Sector</p>
                            <p>{company.Sector}</p>
                            <p className='text-xs mt-2'>Revenue</p>
                            <p>${company.RevenueTTM}</p>
                        </div>
                        <div>
                            <p className='text-xs'>Fiscal Year-End</p>
                            <p>{company.FiscalYearEnd}</p>
                            <p className='text-xs mt-2'>{new Date(company.LatestQuarter ?? '').getFullYear()} Revenue Growth</p>
                            <p>%{company.QuarterlyRevenueGrowthYOY}%</p>
                            <p className='text-xs mt-2'>{new Date(company.LatestQuarter ?? '').getFullYear()} Earnings Growth</p>
                            <p>%{company.QuarterlyRevenueGrowthYOY}%</p>
                        </div>
                    </div>
                </article>
                <article>
                    <h3 className='text-xl font-bold'>Description</h3>
                    <p>{company.Description}</p>
                </article></div>
        </section>
    )
}
