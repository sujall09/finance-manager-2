import React from 'react'
import { useSelector } from 'react-redux'

function Dashboard() {
    const { user, isLoggedIn } = useSelector(state => state.auth)

    console.log("Redux user:", user);
    console.log("Is logged in:", isLoggedIn);
    return (
        <div>
            {isLoggedIn ? `Logged in as ${user.username}` : "Not logged in"}
        </div>
    )
}

export default Dashboard
