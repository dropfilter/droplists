import React from 'react'
import Seo from '../components/Seo'

export default function NotFoundPage() {
    return (
        <>
            <Seo title={`404 - Page Not Found`} />
      <header className="bg-blue-500 w-full h-28">
        <div className="container mx-auto px-4 h-full">
            <div className="h-full flex flex-row flex-nowrap justify-between items-center">
                <div className="flex flex-col">
                    <h1><span className="font-bold">404</span> Page Not Found</h1>
                    <small>Aww sad face 😢</small>
                </div>
            </div>
        </div>
    </header>
        </>
    )
} 