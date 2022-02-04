import nDash from '../../assets/dashboard/nDash.svg'
import aDash from '../../assets/dashboard/aDash.svg'
import nInvest from '../../assets/dashboard/nInvest.svg'
import aInvest from '../../assets/dashboard/aInvest.svg'
import nDeposit from '../../assets/dashboard/nDeposit.svg'
import aDeposit from '../../assets/dashboard/aDeposit.svg'
import nWithd from '../../assets/dashboard/nWithd.svg'
import aWithd from '../../assets/dashboard/aWithd.svg'
import nTrans from '../../assets/dashboard/nTrans.svg'
import aTrans from '../../assets/dashboard/aTrans.svg'
import nRefer from '../../assets/dashboard/nRefer.svg'
import aRefer from '../../assets/dashboard/aRefer.svg'

const navLinks = [
    {
        name: 'Dashboard',
        to: '/dashboard',
        normalIcon: nDash,
        activeIcon: aDash,
    },
    {   
        name: 'Investment',
        to: '/dashboard/investment',
        normalIcon: nInvest,
        activeIcon: aInvest,
    },
    {   
        name: 'Deposit',
        to: '/dashboard/deposit',
        normalIcon: nDeposit,
        activeIcon: aDeposit,
    },
    {   
        name: 'Withdraw',
        to: '/dashboard/withdraw',
        normalIcon: nWithd,
        activeIcon: aWithd,
    },
    {   
        name: 'Transactions',
        to: '/dashboard/transactions',
        normalIcon: nTrans,
        activeIcon: aTrans,
    },
    {   
        name: 'Referals',
        to: '/dashboard/referals',
        normalIcon: nRefer,
        activeIcon: aRefer,
    }
]
export default navLinks