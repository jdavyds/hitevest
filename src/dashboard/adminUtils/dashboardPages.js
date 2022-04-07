import Deposit from "../../pages/adminDashboard/Deposit";
import Home from "../../pages/adminDashboard/Home";
import Withdraw from "../../pages/adminDashboard/Withdraw";
import Plans from "../../pages/adminDashboard/Plans";

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
    {
        path: '/admin-dashboard/plans',
        component: Plans
    },
]

export default dashboardPages
