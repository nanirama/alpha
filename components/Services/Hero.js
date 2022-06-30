
import Image from 'next/image'
import Heroimage from "../../assets/images/heroimg.jpg"
import { ChevronRightIcon, StarIcon } from '@heroicons/react/solid'

export default function Hero() {
  return (
    <div className="bg-white pb-8 mt-8 my-6 sm:pb-12">
      <div className="pt-8 overflow-hidden sm:pt-12 lg:relative">
        <div className="px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24">
          <div>
            <div className="">
              <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
                Pitch Deck for SaaS that helps you raise funds faster and smarter
              </h1>
              <p className="mt-6 text-xl text-gray-500">
                AlphaValley Pitch Deck for SaaS is a bespoke service for Software entrepreneurs. We craft VC-grade pitch decks
                for SaaS founders like you
              </p>
              <p className="mt-4 text-xl text-gray-500">
                Save time focusing on your core growth metrics and leave the heavy-lifting of pitch deck development to us. SaaS
                entrepreneurs love our meticulous process and co-founder like approach.
              </p>
            </div>
            <form action="#" className="mt-12 sm:max-w-lg sm:w-full sm:flex">
              <div className="mt-4 sm:mt-0">
                <button
                  type="submit"
                  className="block w-full rounded-md border border-transparent px-5 py-3 bg-indigo-600 text-base font-medium text-white shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:px-10"
                >
                  Contact now
                </button>
              </div>
            </form>
            <div className="mt-6">
              <div className="inline-flex items-center divide-x divide-gray-300">
                <div className="flex-shrink-0 flex pr-5">
                  <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                  <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                  <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                  <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                  <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                </div>
                <div className="min-w-0 flex-1 pl-5 py-1 text-sm text-gray-500 sm:py-3">
                  <span className="font-medium text-gray-900"> Rated 4.2 stars</span>
                  <span className="font-medium text-indigo-600"> on Trustpilot</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:mx-auto sm:max-w-3xl sm:px-6">
          <div className="pt-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <div className="hidden sm:block">
              <div className="absolute inset-y-0 left-1/2 w-screen bg-gray-50 rounded-l-3xl lg:left-80 lg:right-0 lg:w-full" />
              <svg
                className="absolute top-8 right-1/2 -mr-3 lg:m-0 lg:left-0"
                width={404}
                height={392}
                fill="none"
                viewBox="0 0 404 392"
              >
                <defs>
                  <pattern
                    id="837c3e70-6c3a-44e6-8854-cc48c737b659"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width={404} height={392} fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)" />
              </svg>
            </div>
            <div className="relative pl-4 sm:-mr-40 mx-auto sm:max-w-3xl sm:px-0 lg:max-w-none lg:h-full lg:pl-12">
              <Image className="w-full rounded-md shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none" src={Heroimage} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
