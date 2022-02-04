import Deposit from "../../pages/dashboard/Deposit";
import Home from "../../pages/dashboard/Home";
import Investment from "../../pages/dashboard/Investment";
import Profile from "../../pages/dashboard/Profile";
import Referals from "../../pages/dashboard/Referals";
import Transactions from "../../pages/dashboard/Transactions";
import Withdraw from "../../pages/dashboard/Withdraw";


const dashboardPages = [
    {
        path: '/dashboard',
        component: Home
    },
    {
        path: '/dashboard/investment',
        component: Investment
    },
    {
        path: '/dashboard/deposit',
        component: Deposit
    },
    {
        path: '/dashboard/withdraw',
        component: Withdraw
    },
    {
        path: '/dashboard/transactions',
        component: Transactions
    },
    {
        path: '/dashboard/referals',
        component: Referals
    },
    {
        path: '/dashboard/profile',
        component: Profile
    }
]

export default dashboardPages
