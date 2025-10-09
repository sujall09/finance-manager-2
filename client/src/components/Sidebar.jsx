import { NavLink } from "react-router-dom";
import { MdDashboard, MdOutlineSavings, MdLogout, MdMenuOpen, MdMenu } from "react-icons/md";
import { AiOutlineRise, AiOutlineFall } from "react-icons/ai";
import { VscGraph } from "react-icons/vsc";
import { IoSettingsOutline } from "react-icons/io5";



function Sidebar({ isOpen, setIsOpen }) {
    const linkClasses = "flex items-center gap-3 p-3 rounded hover:bg-gray-100 transition-colors";
    return (
        <aside className={`shadow-md flex flex-col fixed top-0 left-0 h-screen transition-all duration-300 ease-in-out ${isOpen ? 'w-64' : 'w-20'}`}>
            {/* logo and heading */}
            {isOpen ?
                <div className="p-6 h-20 border-b rounded border-gray-200 flex items-center justify-between gap-x-3">
                    <div className="flex justify-center gap-2 items-center">
                        <div className="flex justify-center w-8 h-8 bg-green-600 rounded-xl items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-piggy-bank w-5 h-5 text-white" aria-hidden="true">
                                <path d="M11 17h3v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a3.16 3.16 0 0 0 2-2h1a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-1a5 5 0 0 0-2-4V3a4 4 0 0 0-3.2 1.6l-.3.4H11a6 6 0 0 0-6 6v1a5 5 0 0 0 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1z"></path>
                                <path d="M16 10h.01"></path><path d="M2 8v1a2 2 0 0 0 2 2h1"></path>
                            </svg>
                        </div>
                        <h1 className="text-xl text-gray-900 font-medium">FinanceApp</h1>
                    </div>
                    <MdMenu onClick={() => setIsOpen(!isOpen)} size={25} className="cursor-pointer" />
                </div>
                : <div className="p-6 h-20 border-b rounded border-gray-200 flex items-center justify-center gap-x-3">
                    <MdMenuOpen onClick={() => setIsOpen(!isOpen)} size={25} className="cursor-pointer" />
                </div>
            }

            <nav className="flex-1 p-4 space-y-4">
                <NavLink
                    to="/dashboard"
                    end
                    className={({ isActive }) => `${linkClasses} ${isActive ? "text-green-700 font-medium bg-green-100 hover:bg-green-200 hover:text-black" : ""}`}
                >
                    <MdDashboard size={20} /> {isOpen && <span>Dashboard</span>}
                </NavLink>
                <NavLink
                    to="/dashboard/income"
                    className={({ isActive }) => `${linkClasses} ${isActive ? "text-green-700 font-medium bg-green-100 hover:bg-green-200 hover:text-black" : ""}`}
                >
                    <AiOutlineRise size={20} /> {isOpen && <span>Income</span>}
                </NavLink>
                <NavLink
                    to="/dashboard/expense"
                    className={({ isActive }) => `${linkClasses} ${isActive ? "text-green-700 font-medium bg-green-100 hover:bg-green-200 hover:text-black" : ""}`}
                >
                    <AiOutlineFall size={20} /> {isOpen && <span>Expense</span>}
                </NavLink>
                <NavLink
                    to="/dashboard/expense"
                    className={({ isActive }) => `${linkClasses} ${isActive ? "text-green-700 font-medium bg-green-100 hover:bg-green-200 hover:text-black" : ""}`}
                >
                    <MdOutlineSavings size={20} /> {isOpen && <span>Savings</span>}
                </NavLink>
                <NavLink
                    to="/dashboard/expense"
                    className={({ isActive }) => `${linkClasses} ${isActive ? "text-green-700 font-medium bg-green-100 hover:bg-green-200 hover:text-black" : ""}`}
                >
                    <VscGraph size={20} /> {isOpen && <span>Reports</span>}
                </NavLink>
                <NavLink
                    to="/dashboard/expense"
                    className={({ isActive }) => `${linkClasses} ${isActive ? "text-green-700 font-medium bg-green-100 hover:bg-green-200 hover:text-black" : ""}`}
                >
                    <IoSettingsOutline size={20} /> {isOpen && <span>Settings</span>}
                </NavLink>
            </nav>
            <div className="p-4 border-t border-gray-200">
                <NavLink
                    to="#"
                    className="p-3 flex items-center gap-3 rounded hover:bg-red-50 hover:text-red-500"
                >
                    {isOpen ?
                        <>
                            <MdLogout size={20} />  <span>Logout</span></>
                        :
                        <MdLogout size={20} className="flex justify-center" />
                    }
                </NavLink>
            </div>
        </aside >
    )
}

export default Sidebar
