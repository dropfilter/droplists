import React from 'react'
import Seo from '../components/Seo'
import { Link } from 'gatsby'

export default function HomePage() {
    return (
        <>
            <Seo title={`Home`} description="Browse the back catalog of expired domain drop lists used specifically by Dropfilter app." />
    <header className="bg-blue-500 w-full h-28">
            <div className="container mx-auto px-4 h-full">
                <div className="h-full flex flex-row flex-nowrap justify-between items-center">
                    <div className="flex flex-col">
                        <h1>Dropfilter Archive</h1>
                        <small>Expired Domain Name Drop List Archives</small>
                    </div>
                    <Link to={`/lists`} className="py-2 px-3 bg-yellow-500 hover:bg-yellow-600 rounded-sm shadow-sm flex flex-col place-content-center items-center text-center">
                        <strong>Go To Lists</strong>
                    </Link>
                </div>
            </div>
        </header>
        </>
    )
} 