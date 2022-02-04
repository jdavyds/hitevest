import Deposit from "../../pages/adminDashboard/Deposit";
import Home from "../../pages/adminDashboard/Home";
import Withdraw from "../../pages/adminDashboard/Withdraw";


const dashboardPages = [
    {
        path: '/admin-dashboard',
        component: Home
    },
    {
        path: '/admin-dashboard/deposit',
        component: Deposit
    },
    {
        path: '/admin-dashboard/withdraw',
        component: Withdraw
    },
]

export default dashboardPages
