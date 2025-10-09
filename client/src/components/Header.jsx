import { NavLink } from 'react-router-dom'
import { MdLogout } from 'react-icons/md'

function Header({ isOpen, setIsOpen }) {
    return (
        <header className={`transition-all duration-300 ease-in-out fixed top-0 ${isOpen ? "left-64" : "left-20"} right-0 z-50 p-6 border-b rounded border-gray-200 flex items-center justify-between h-20`}>
            <div className='text-lg text-gray-600 capitalize'>
                Dashboard Header
            </div>
            <div className='flex items-center gap-4'>
                <div className='text-right'>
                    <p className='text text-gray-900'>Demo User</p>
                    <p className='text-sm text-gray-500'>demo@example.com</p>
                </div>
                <span className='flex size-10 items-center justify-center rounded-full bg-green-100 text-green-700 text-sm'>DU</span>
                <NavLink
                    to="#"
                    className="flex items-center gap-3 rounded hover:text-red-500"
                >
                    <MdLogout size={20} className="flex justify-center" />
                </NavLink>
            </div>
        </header>
    )
}

export default Header
