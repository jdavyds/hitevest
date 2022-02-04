import nDash from '../../assets/dashboard/nDash.svg'
import aDash from '../../assets/dashboard/aDash.svg'
import nDeposit from '../../assets/dashboard/nDeposit.svg'
import aDeposit from '../../assets/dashboard/aDeposit.svg'
import nWithd from '../../assets/dashboard/nWithd.svg'
import aWithd from '../../assets/dashboard/aWithd.svg'

const navLinks = [
    {
        name: 'Dashboard',
        to: '/admin-dashboard',
        normalIcon: nDash,
        activeIcon: aDash,
    },
    {   
        name: 'Deposit',
        to: '/admin-dashboard/deposit',
        normalIcon: nDeposit,
        activeIcon: aDeposit,
    },
    {   
        name: 'Withdraw',
        to: '/admin-dashboard/withdraw',
        normalIcon: nWithd,
        activeIcon: aWithd,
    },
    
]
export default navLinks