import React from "react"
import { useRouter } from 'next/router';
import Image from 'next/image'
import Link from "next/link"

import Logo from "../assets/images/logo.png"

import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  ChartBarIcon,
  CursorClickIcon,
  DocumentReportIcon,
  MenuIcon,
  RefreshIcon,
  ShieldCheckIcon,
  ViewGridIcon,
  XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'

const solutions = [

]
const resources = [

]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Header = () => {
  const { pathname } = useRouter();
  console.log('router.pathname', pathname)
  return (
    <div>
      <Popover className="relative bg-white border">
        <div className="flex justify-between items-center px-4 pt-2 pb-1 sm:px-2 lg:justify-start lg:space-x-10">
          <div>
            <div className="flex">
              <span className="sr-only">Workflow</span>
              <Link href="/">
                <a>
                  <Image
                    src={Logo}
                    alt="Alpha Valley"
                    width={100}
                    height={64}
                  />
                </a>
              </Link>
            </div>
          </div>
          <div className="-mr-2 -my-2 lg:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <div className="hidden lg:flex-1 lg:flex lg:items-center lg:justify-between">
            <Popover.Group as="nav" className="flex xl:space-x-10 lg:space-x-6">
              <Link href="/">
                <a className={pathname === '/' ? 'text-base font-bold text-gray-900' : 'text-base font-medium text-gray-600 hover:text-gray-900 hover:font-bold'}>
                  Home
                </a>
              </Link>
              <Link href="/about-us">
              <a className={pathname === '/about-us' ? 'text-base font-bold text-gray-900' : 'text-base font-medium text-gray-600 hover:text-gray-900 hover:font-bold'}>
                About us
              </a>
              </Link>
              <Link href="/services">
                <a className={pathname === '/services' ? 'text-base font-bold text-gray-900' : 'text-base font-medium text-gray-600 hover:text-gray-900 hover:font-bold'}>
                  Services
                </a>
              </Link>
              <Link href="/faq">
                <a className={pathname === '/faq' ? 'text-base font-bold text-gray-900' : 'text-base font-medium text-gray-600 hover:text-gray-900 hover:font-bold'}>
                  FAQ
                </a>
              </Link>
              <Link href="/testimonials">
              <a className={pathname === '/testimonials' ? 'text-base font-bold text-gray-900' : 'text-base font-medium text-gray-600 hover:text-gray-900 hover:font-bold'}>
                Testimonials
              </a>
              </Link>
              <Link href="/blog">
              <a className={pathname === '/blog' ? 'text-base font-bold text-gray-900' : 'text-base font-medium text-gray-600 hover:text-gray-900 hover:font-bold'}>
                Blog
              </a>
              </Link>
              <Link href="/case-studies">
              <a className={pathname === '/case-studies' ? 'text-base font-bold text-gray-900' : 'text-base font-medium text-gray-600 hover:text-gray-900 hover:font-bold'}>
                Case studies
              </a>
              </Link>
            </Popover.Group>
            <div className="flex items-center lg:ml-12">
              <Link href="#">
                <a className="text-base font-medium text-gray-600 hover:text-gray-900  hover:font-bold">
                  Sign in
                </a>
              </Link>
              <a
                href="#"
                className="ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Sign up
              </a>
            </div>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right lg:hidden">
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div>
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                      alt="Workflow"
                    />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-6">
                    {solutions.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                      >
                        <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white">
                          <item.icon className="h-6 w-6" aria-hidden="true" />
                        </div>
                        <div className="ml-4 text-base font-medium text-gray-900">{item.name}</div>
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
              <div className="py-6 px-5">
                <div className="grid grid-cols-2 gap-4">
                  <Link href="/">
                    <a className="text-base font-medium text-gray-900 hover:text-gray-700">
                      Home
                    </a>
                  </Link>

                  <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                    About us
                  </a>
                  <Link href="/services">
                    <a className="text-base font-medium text-gray-900 hover:text-gray-700">
                      Services
                    </a>
                  </Link>
                  <Link href="/faq">
                    <a className="text-base font-medium text-gray-900 hover:text-gray-700">
                      FAQ
                    </a>
                  </Link>

                  <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                    Testimonials
                  </a>

                  <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                    Blog
                  </a>
                  <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                    Case studies
                  </a>

                  {resources.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-base font-medium text-gray-900 hover:text-gray-700"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="mt-6">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    Sign up
                  </a>
                  <p className="mt-6 text-center text-base font-medium text-gray-500">
                    <a href="#" className="text-indigo-600 hover:text-indigo-500">
                      Sign in
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  )
}

export default Header