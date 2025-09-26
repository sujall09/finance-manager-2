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
            <main className="flex-1 ml-64">
                <Header />
                <Outlet />
            </main>
        </div>
    )
}

export default Layout
