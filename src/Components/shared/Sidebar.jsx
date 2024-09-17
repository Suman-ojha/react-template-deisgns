import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import classNames from 'classnames'
import { FcBullish } from 'react-icons/fc'
import { HiOutlineLogout } from 'react-icons/hi'

import { DASHBOARD_SIDEBAR_LINKS, DASHBOARD_SIDEBAR_BOTTOM_LINKS } from '../../utils/constants/navigation'
const linkClass = 'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base'
const Sidebar = () => {
    return (
        <div className='flex flex-col bg-neutral-800 w-60 p-5 text-white'>
            {/* for logo */}
            <div className="flex items-center gap-3 px-1 py-3">
                <FcBullish fontSize={24} />
                <span className="text-neutral-200 text-lg">OpenShop</span>
            </div>
            {/* for nav-item */}
            {/* <div className="py-8 flex flex-1 flex-col gap-0.5">
				{DASHBOARD_SIDEBAR_LINKS.map((link) => (
					<SidebarLink key={link.key} link={link} />
				))}
			</div> */}
            <div className="flex flex-col py-8 gap-1 flex-1">
                {DASHBOARD_SIDEBAR_LINKS.map((link) => (
                    <SidebarLink key={link.key} link={link} />
                ))}
            </div>
            <div className='flex flex-col gap-1 pt-2 border-t border-neutral-700'>
                {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((link) => (
                    <SidebarLink key={link.key} link={link} />
                ))}
                <div className={classNames('cursor-pointer text-red-500', linkClass)}>
                    <span className='text-xl'>
                        <HiOutlineLogout />
                    </span>
                    Logout
                </div>
            </div>
        </div>
    )
}

export default Sidebar

function SidebarLink({ link }) {
    const { pathname } = useLocation()
    return (
        <Link
            to={link.path}
            className={classNames(pathname === link.path ? 'bg-neutral-600 text-white' : 'text-neutral-400', linkClass)}
        >
            <span className="text-xl">{link.icon}</span>
            {link.label}
        </Link>
    )
}
