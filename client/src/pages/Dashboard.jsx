import { DashboardMain } from "../components"
import DashboardCharts from '../components/DashboardCharts';
import DashboardTransactions from "../components/DashboardTransactions";

function Dashboard() {
    // const { user, isLoggedIn } = useSelector(state => state.auth)

    return (
        <div className='min-h-screen bg-gray-50 space-y-6'>
            <DashboardMain />
            <DashboardCharts />
            <DashboardTransactions />
        </div>
    )
}

export default Dashboard
