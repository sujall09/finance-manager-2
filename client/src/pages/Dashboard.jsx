import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { DashboardMain, Header, Sidebar } from "../components"

function Dashboard() {
    const { user, isLoggedIn } = useSelector(state => state.auth)

    return (
        <div className='flex min-h-screen bg-gray-50'>
            <DashboardMain />
        </div>
    )
}

export default Dashboard
