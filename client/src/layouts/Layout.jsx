import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar"
import { Header } from "../components"
import { useState } from "react"

function Layout() {
    const [isOpen, setIsOpen] = useState(true);
    return (
        <div className='flex min-h-screen bg-gray-50'>
            {/* Sidebar */}
            <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

            {/* main content */}
            <div className="flex-1 flex flex-col min-h-0">
                <Header isOpen={isOpen} setIsOpen={setIsOpen} />
                <main className={`transition-all duration-300 ease-in-out ${isOpen ? "flex-1 ml-64" : "flex-1 ml-20"} mt-16 p-6`}>
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default Layout
