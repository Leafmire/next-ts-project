'use client'
import {
	CalendarIcon,
	ChartBarIcon,
	FolderIcon,
	HomeIcon,
	InboxIcon,
	UsersIcon,
  } from '@heroicons/react/24/outline'

export const navigation = [
	{ name: 'Overview', href: '/lobby/overview', icon: HomeIcon, current: true },
	{ name: 'Game', href: '/lobby/pong', icon: UsersIcon, current: false },
	{ name: 'Live', href: '#', icon: FolderIcon, current: false },
	{ name: 'Chat', href: '#', icon: CalendarIcon, current: false },
  ]
