import React from 'react';
import { Link } from 'gatsby'

export default function Header({ dropDate, totalCount, numDomains, directLink, fileSize }) {

    const internationalNumberFormat = new Intl.NumberFormat('en-US')
    const domainCount = internationalNumberFormat.format(numDomains)
    const listCount = internationalNumberFormat.format(totalCount)

    return (
        <header className="bg-blue-500 w-full h-28">
            <div className="container mx-auto px-4 h-full">
                <div className="h-full flex flex-row flex-nowrap justify-between items-center">
                    <div className="flex flex-col">
                        <h1>Dropfilter Archive</h1>
                        <small>{domainCount} expired on {dropDate}</small>
                    </div>
                    <Link id="raw-link" to={directLink} className="py-2 px-3 bg-yellow-500 hover:bg-yellow-600 rounded-sm shadow-sm flex flex-col place-content-center items-center text-center">
                        <strong>RAW LIST</strong>
                        <small>{fileSize}</small>
                    </Link>
                </div>
            </div>
        </header>
    )
}