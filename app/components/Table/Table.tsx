'use client'
import React, { useState } from "react"

import { DownloadedFile } from "../../utils/utils"
import Modal from "../Modal"
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid"

export default function Table({ items }: any) {
    const [open, setOpen] = useState(false)
    const [search, setSearch] = useState('')
    const updatedItems = items.filter((item: any) => item.file_path.toLowerCase().includes(search))
    return (
    <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex flex-1 h-10 mb-3 gap-x-4 self-stretch lg:gap-x-6">
              <form className="relative flex flex-1" action="#" method="GET">
                <label htmlFor="search-field" className="sr-only">
                  Search
                </label>
                <MagnifyingGlassIcon
                  className="pointer-events-none mx-2 absolute inset-y-0 left-0 h-full w-5 text-gray-400"
                  aria-hidden="true"
                />
                <input
                  id="search-field"
                  className="block h-full w-full border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                  placeholder="Search..."
                  type="search"
                  name="search"
                  onChange={(e)=>{
                    setSearch(e.target.value)
                  }}
                />
              </form>
        </div>
        <Modal open={open} setOpen={setOpen}/>
        <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
            <h1 className="text-base font-semibold leading-6 text-gray-900">Downloaded File</h1>
            <p className="mt-2 text-sm text-gray-700">
                A list of all the downloaded files on this respective EC2 instance.
            </p>
            </div>
            <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            <button
                type="button"
                className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={()=>{setOpen(true)}}
            >
                Subscribe
            </button>
            </div>
        </div>
        <div className="mt-8 flow-root">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <table className="min-w-full divide-y divide-gray-300">
                <thead>
                    <tr>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                        Host name
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        File path
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Remote Ip
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Remote port
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Space
                    </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    {updatedItems.map((item: DownloadedFile) => (
                        <tr key={item.id}>
                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                            {item.host_name}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.file_path}</td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.r_ip}</td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.r_port}</td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.file_size}</td>
                            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                            </td>
                        </tr>
                    ))}
                </tbody>
                </table>
            </div>
            </div>
        </div>
    </div>
    )
}