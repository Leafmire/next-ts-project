'use client'

import { Fragment } from 'react'
import Link from 'next/link'
import { Dialog, Transition } from '@headlessui/react'
import {
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { navigation } from './nav-items'

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

export default function SideMenu({sidebarOpen, onToggle}: {sidebarOpen: boolean, onToggle: any}) {

	return (
		<>
		<Transition.Root show={sidebarOpen} as={Fragment}>
		<Dialog as="div" className="relative z-40 lg:hidden" onClose={onToggle}>
		  <Transition.Child
			as={Fragment}
			enter="transition-opacity ease-linear duration-300"
			enterFrom="opacity-0"
			enterTo="opacity-100"
			leave="transition-opacity ease-linear duration-300"
			leaveFrom="opacity-100"
			leaveTo="opacity-0"
		  >
			<div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
		  </Transition.Child>

		  <div className="fixed inset-0 z-40 flex">
			<Transition.Child
			  as={Fragment}
			  enter="transition ease-in-out duration-300 transform"
			  enterFrom="-translate-x-full"
			  enterTo="translate-x-0"
			  leave="transition ease-in-out duration-300 transform"
			  leaveFrom="translate-x-0"
			  leaveTo="-translate-x-full"
			>
			  <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-gray-800">
				<Transition.Child
				  as={Fragment}
				  enter="ease-in-out duration-300"
				  enterFrom="opacity-0"
				  enterTo="opacity-100"
				  leave="ease-in-out duration-300"
				  leaveFrom="opacity-100"
				  leaveTo="opacity-0"
				>
				  <div className="absolute top-0 right-0 -mr-12 pt-2">
					<button
					  type="button"
					  className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
					  onClick={() => onToggle(false)}
					>
					  <span className="sr-only">Close sidebar</span>
					  <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
					</button>
				  </div>
				</Transition.Child>
				<div className="h-0 flex-1 overflow-y-auto pt-5 pb-4">
				  <div className="flex flex-shrink-0 items-center px-4">
					<img
					  className="h-8 w-auto"
					  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
					  alt="Your Company"
					/>
				  </div>
				  <nav className="mt-5 space-y-1 px-2">
					{navigation.map((item) => (
					  <Link
						key={item.name}
						href={item.href}
						className={classNames(
						  item.current
							? 'bg-gray-900 text-white'
							: 'text-gray-300 hover:bg-gray-700 hover:text-white',
						  'group flex items-center rounded-md px-2 py-2 text-base font-medium'
						)}
					  >
						<item.icon
						  className={classNames(
							item.current ? 'text-gray-300' : 'text-gray-400 group-hover:text-gray-300',
							'mr-4 h-6 w-6 flex-shrink-0'
						  )}
						  aria-hidden="true"
						/>
						{item.name}
					  </Link>
					))}
				  </nav>
				</div>
				<div className="flex flex-shrink-0 bg-gray-700 p-4">
				  <Link href="#" className="group block flex-shrink-0">
					<div className="flex items-center">
					  <div>
						<img
						  className="inline-block h-10 w-10 rounded-full"
						  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
						  alt=""
						/>
					  </div>
					  <div className="ml-3">
						<p className="text-base font-medium text-white">Tom Cook</p>
						<p className="text-sm font-medium text-gray-400 group-hover:text-gray-300">View profile</p>
					  </div>
					</div>
				  </Link>
				</div>
			  </Dialog.Panel>
			</Transition.Child>
			<div className="w-14 flex-shrink-0">{/* Force sidebar to shrink to fit close icon */}</div>
		  </div>
		</Dialog>
	  </Transition.Root>

	  {/* Static sidebar for desktop */}
	  <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
		{/* Sidebar component, swap this element with another sidebar if you like */}
		<div className="flex min-h-0 flex-1 flex-col bg-gray-800">
		  <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
			<div className="flex flex-shrink-0 items-center px-4">
			  <img
				className="h-8 w-auto"
				src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
				alt="Your Company"
			  />
			</div>
			<nav className="mt-5 flex-1 space-y-1 px-2">
			  {navigation.map((item) => (
				<Link
				  key={item.name}
				  href={item.href}
				  className={classNames(
					item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
					'group flex items-center rounded-md px-2 py-2 text-sm font-medium'
				  )}
				>
				  <item.icon
					className={classNames(
					  item.current ? 'text-gray-300' : 'text-gray-400 group-hover:text-gray-300',
					  'mr-3 h-6 w-6 flex-shrink-0'
					)}
					aria-hidden="true"
				  />
				  {item.name}
				</Link>
			  ))}
			</nav>
		  </div>
		  <div className="flex flex-shrink-0 bg-gray-700 p-4">
			<Link href="/lobby/my-profile" className="group block w-full flex-shrink-0">
			  <div className="flex items-center">
				<div>
				  <img
					className="inline-block h-9 w-9 rounded-full"
					src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
					alt=""
				  />
				</div>
				<div className="ml-3">
				  <p className="text-sm font-medium text-white">Tom Cook</p>
				  <p className="text-xs font-medium text-gray-300 group-hover:text-gray-200">View profile</p>
				</div>
			  </div>
			</Link>
		  </div>
		</div>
	  </div>
	  </>
	)
}
