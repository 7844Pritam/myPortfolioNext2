import dynamic from 'next/dynamic'
import React from 'react'

function Footer() {
    return (
        <div>
            <footer className="bg-[#ffffff] rounded-lg shadow  dark:bg-gray-800">
                <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400"><a href="https://flowbite.com/" className="hover:underline">Discusstion And </a>Do Always Good
                    </span>
                    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                      
                        <li>
                            <a href="#" className="hover:underline">Lets Your Carrer In Code Era  </a>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    )
}

export default dynamic (() => Promise.resolve(Footer), {ssr: false})
