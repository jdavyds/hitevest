import axiosHelper from "../../request/axiosHelper";
import { updateUser, updateUse, updateBal, clearUse, updateRef, updateMessage, isError, isLoading, verified, logout } from "../slices/userSlice";

export const loginUser = (data) => dispatch => {
    dispatch(isLoading())
    axiosHelper.post('/login', data)
    .then(res =>{
        const { id, name, email, phone, bvn, image, dob, sex, status, account_id, withdrawal_limit, shutdown_level } = res.data.user;
        const { message, referralLink, deposit_wallet, interest_wallet, access_token, expires } = res.data;
        const userData = {
            id,
            name,
            email,
            phone,
            bvn,
            image,
            dob, 
            sex, 
            status, 
            accountId: account_id,
            withdrawalLimit: withdrawal_limit, 
            shutdownLevel: shutdown_level,

            referralLink: referralLink,
            depositWallet: deposit_wallet,
            interestWallet: interest_wallet,
            accessToken: access_token,
            expiresIn: expires,
            message: message,
        };
        dispatch(verified());
        localStorage.setItem('user', JSON.stringify(userData));
        dispatch(updateUser(userData));
        dispatch(depositHistory())
        dispatch(withdrawHistory())
        dispatch(referrals())
        dispatch(getTotals())
        dispatch(showPlan())
       })
    .catch((err) => {
        console.log(err);
        const userData = {
            message: err.message,
        }
        dispatch(updateMessage(userData.message))
        dispatch(updateUse(userData))
        dispatch(isError())
    })
} 
export const clearNotUser = () => dispatch => {
    dispatch(clearUse(null))
}
export const adminLogin = (data) => dispatch => {
    dispatch(isLoading())
    dispatch(depositHistoryAdmin())
    dispatch(withdrawHistoryAdmin())
    dispatch(showPlan());
    axiosHelper.post('/admin-login', data)
    .then(res =>{
        const { message } = res.data;
        const userData = {
            message: message,
        };
        dispatch(verified());
        localStorage.setItem('user', JSON.stringify(userData));
        dispatch(updateUser(userData));
       })
    .catch(() => {
        dispatch(isError())
    })
}
export const forgotPassword = (data) => dispatch => {
    dispatch(isLoading())
    axiosHelper.post('/forgot_password', data)
    .then(res =>{
        const { message, status } = res.data
        console.log(res);
        const userData = {
            status: status,
            message: message, 
        };
        dispatch(verified());
        sessionStorage.setItem('user', JSON.stringify(userData));
        dispatch(updateUse(userData));
       })
    .catch(() => {
        dispatch(isError())
    })
}
export const verifyToken = (data) => dispatch => {
    dispatch(isLoading())
    axiosHelper.post('/verify_password_token', data)
    .then(res =>{
        const { message, status} = res.data
        const userData = {
            message: message, 
            status: status
        };
        dispatch(updateMessage(userData.message))
        sessionStorage.setItem('verifyToken', JSON.stringify(userData));
        dispatch(verified());
        dispatch(updateUse(userData));
       })
    .catch((err) => {
        console.log(err);
        dispatch(isError())
    })
}
export const resetPassword = (data) => dispatch => {
    dispatch(isLoading())
    axiosHelper.post('/password_reset', data)
    .then(res =>{
        console.log(res);
        const { message, status } = res.data
        const userData = {
            message: message, 
            status: status
        };
        dispatch(verified());
        sessionStorage.setItem('reset', JSON.stringify(userData));
        dispatch(updateUse(userData));
       })
    .catch((err) => {
        console.log(err);
        const userData = {
            message: err.message,
        }
        dispatch(updateMessage(userData.message))
        dispatch(updateUse(userData))
        dispatch(isError())
    })
} 
export const registerReferredUser = (data, code) => dispatch => {
    dispatch(isLoading())
    axiosHelper.post(`/register/${code}`, data)
    .then(res =>{
        const { id, name, email, phone, password } = res.data.Data
        const userData = {
            id,
            name,
            email,
            phone,
            password,
            message: res.data.message,
            status: res.data.status,
        };
        dispatch(updateMessage(userData.message));
        dispatch(updateUser(userData));
    })
    .catch((err) => {
        console.log(err);
        const userData = {
            message: err.message,
        }
        dispatch(updateMessage(userData.message))
        dispatch(updateUse(userData))
        dispatch(isError())
    })
} 
export const registerUser = (data) => dispatch => {
    dispatch(isLoading())
    axiosHelper.post('/register', data)
    .then(res =>{
        const { id, name, email, phone, password } = res.data.Data
        const userData = {
            id,
            name,
            email,
            phone,
            password,
            message: res.data.message,
            status: res.data.status,
        };
        dispatch(updateMessage(userData.message));
        dispatch(updateUser(userData));
    })
    .catch((err) => {
        console.log(err);
        const userData = {
            message: err.message,
        }
        dispatch(updateMessage(userData.message))
        dispatch(updateUse(userData))
        dispatch(isError())
    })
} 
export const resendOtp = (data) => dispatch => {
    dispatch(isLoading())
    axiosHelper.post('/resend-otp', data)
    .then(res =>{
        const userData = {
            message: res.data.message,
        };
        dispatch(updateMessage(userData.message));
        dispatch(updateUser(userData));
    })
    .catch(() => {
        dispatch(isError())
    })
} 
export const verifyOtp = (data) => dispatch => {
    dispatch(isLoading())
    axiosHelper.post('/verify-otp', data)
    .then(res =>{
        const { id, name, email, phone, password } = res.data.user;
        const { account_number, data, referral_link, deposit_wallet, interest_wallet } = res.data;
        const userData = {
            id,
            name,
            email,
            phone,
            password,
            message: res.data.message,
            accountNumbers: account_number,
            referralLink: referral_link,
            depositWallet: deposit_wallet,
            interestWallet: interest_wallet,
            accessToken: data.access_token,
            expiresIn: data.expires_in,
            status: data.status,
        };
        localStorage.setItem('user', JSON.stringify(userData));
        dispatch(updateUser(userData));
        dispatch(verified());
        dispatch(depositHistory())
        dispatch(withdrawHistory())
    })
    .catch(() => {
        dispatch(isError())
    })
}
export const depositReq = (data) => dispatch => {
    dispatch(isLoading())
    const token = localStorage.getItem('user');
    const tokens = JSON.parse(token)
    const headers = {
        'Authorization': `Bearer ${tokens.accessToken}`,
        'Cache-Control': 'no-cache',
        "Content-Type": "application/json"
    }
    axiosHelper.post('/dashboard/user-deposit', data, { headers })
    .then(res =>{
        const { user_id, type, address, amount, transaction_id, id, updated_at, created_at } = res.data.data;
        const userData = {
            user_id,
            type,
            address,
            amount,
            transaction_id,
            id,
            updated_at,
            created_at,
            message: res.data.message,
        }
        dispatch(verified())
        dispatch(updateMessage(userData.message))
        dispatch(updateUser(userData))
        dispatch(depositHistory())
    })
    .catch((err) => {
        console.log(err);
        const userData = {
            message: err.message
        }
        dispatch(updateMessage(userData.message))
        dispatch(updateUser(userData))
        dispatch(isError())
    })
}
export const depositHistory = () => dispatch => {
    const token = localStorage.getItem('user');
    const tokens = JSON.parse(token)
    const headers = {
        'Authorization': `Bearer ${tokens.accessToken}`,
        'Cache-Control': 'no-cache',
        "Content-Type": "application/json"
    }
    axiosHelper.get('/dashboard/deposit-history', { headers })
    .then(res =>{
        const userData = {
            message: res.message,
            depositHistory: res.data
        }
        localStorage.setItem('depHistory', JSON.stringify(userData));
    })
    .catch((res) => {
        localStorage.setItem('depHistory', JSON.stringify(res));
        console.log(res);
        dispatch(isError())
    })
}
export const depositHistoryAdmin = () => dispatch => {
    axiosHelper.get('/user-deposits' )
    .then(res =>{
        const userData = {
            message: res.message,
            depositHistory: res.data
        }
        localStorage.setItem('depHistoryAdmin', JSON.stringify(userData));
    })
    .catch((err) => {
        console.log(err);
        const userData = {
            message: err.message,
            error: err.name,
            status: err.status
        }
        localStorage.setItem('depHistoryAdmin', JSON.stringify(userData));
        dispatch(isError())
    })
}
export const confirmDeposit = (data) => dispatch => {
    dispatch(isLoading())
    axiosHelper.get(`/confirm-deposit/${data[1].userId}/${data[0].depositId}`)
    .then(res =>{
        const userData = {
            message: res.message,
        }
        dispatch(verified())
        localStorage.setItem('confirmDeposit', JSON.stringify(userData));
        dispatch(updateUser(userData))
        dispatch(depositHistoryAdmin())
    })
    .catch((res) => {
        console.log(res);
        localStorage.setItem('confirmDeposit', JSON.stringify(res));
        dispatch(isError())
    })
    console.log(data[0].depositId);
}
export const withdrawReq = (data) => dispatch => {
    dispatch(isLoading())
    const token = localStorage.getItem('user');
    const tokens = JSON.parse(token)
    const headers = {
        'Authorization': `Bearer ${tokens.accessToken}`,
        'Cache-Control': 'no-cache',
        "Content-Type": "application/json"
    }
    axiosHelper.post('/dashboard/withdraw-money', data, { headers })
    .then(res =>{
        const userData = {
            message: res.data.message,
        }
        dispatch(verified())
        dispatch(updateMessage(userData.message))
        dispatch(updateUser(userData))
        dispatch(withdrawHistory())
    })
    .catch((err) => {
        console.log(err);
        const userData = {
            message: err.message,
        }
        dispatch(updateMessage(userData.message))
        dispatch(updateUser(userData))
        dispatch(isError())
    })
}
export const withdrawHistory = () => dispatch => {
    const token = localStorage.getItem('user');
    const tokens = JSON.parse(token)
    const headers = {
        'Authorization': `Bearer ${tokens.accessToken}`,
        'Cache-Control': 'no-cache',
        "Content-Type": "application/json"
    }
    axiosHelper.get('/dashboard/withdrawal-history', { headers })
    .then(res =>{
        const userData = {
            message: res.message,
            depositHistory: res.data
        }
        localStorage.setItem('withdrawHistory', JSON.stringify(userData));
    })
    .catch((res) => {
        console.log(res);
        localStorage.setItem('withdrawHistory', JSON.stringify(res));
        dispatch(isError())
    })
}
export const withdrawHistoryAdmin = () => dispatch => {
    axiosHelper.get('/user-withdrawal' )
    .then(res =>{
        const userData = {
            message: res.message,
            depositHistory: res.data
        }
        localStorage.setItem('withdrawHistoryAdmin', JSON.stringify(userData));
    })
    .catch((res) => {
        console.log(res);
        const userData = {
            message: res.message,
            error: res.name,
            status: res.status
        }
        localStorage.setItem('withdrawHistoryAdmin', JSON.stringify(userData));
        dispatch(isError())
    })
}
export const confirmWithdraw = (data) => dispatch => {
    dispatch(isLoading())
    axiosHelper.get(`/confirm-withdrawal/${data[1].userId}/${data[0].withdrawId}` )
    .then(res =>{
        const userData = {
            message: res.message,
        }
        dispatch(verified())
        localStorage.setItem('confirmWithdraw', JSON.stringify(userData));
        dispatch(updateUser(userData))
        dispatch(withdrawHistoryAdmin())
    })
    .catch((res) => {
        console.log(res);
        localStorage.setItem('confirmWithdraw', JSON.stringify(res));
        dispatch(isError())
    })
}
export const transferReq = (data) => dispatch => {
    dispatch(isLoading())
    const token = localStorage.getItem('user');
    const tokens = JSON.parse(token)
    const headers = {
        'Authorization': `Bearer ${tokens.accessToken}`,
        'Cache-Control': 'no-cache',
        "Content-Type": "application/json"
    }
    axiosHelper.post('/dashboard/transer-wallet', data, { headers })
    .then(res =>{
        console.log(res);
        const userData = {
            message: res.data.message,
        }
        dispatch(verified())
        dispatch(updateMessage(userData.message))
        dispatch(updateUser(userData))
    })
    .catch((res) => {
        console.log(res);
        const userData = {
            message: res.message,
        }
        dispatch(updateMessage(userData.message))
        dispatch(updateUser(userData))
        dispatch(isError())
    })
}
export const changePassword = (data) => dispatch => {
    dispatch(isLoading())
    const token = localStorage.getItem('user');
    const tokens = JSON.parse(token)
    const headers = {
        'Authorization': `Bearer ${tokens.accessToken}`,
        'Cache-Control': 'no-cache',
        "Content-Type": "application/json"
    }
    axiosHelper.post('/dashboard/change-password', data, { headers })
    .then(res =>{
        console.log(res);
        const userData = {
            message: res.message,
        }
        dispatch(verified())
        dispatch(updateMessage(userData.message))
        dispatch(updateUser(userData))
    })
    .catch((res) => {
        console.log(res);
        console.log(res.error);
        const userData = {
            message: res.message,
        }
        dispatch(updateMessage(userData.message))
        dispatch(updateUser(userData))
        dispatch(isError())
    })
}
export const logoutReq = () => dispatch => {
    dispatch(logout())
}
export const updateProfile = (data) => dispatch => {
    dispatch(isLoading())
    const token = localStorage.getItem('user');
    const tokens = JSON.parse(token)
    const headers = {
        'Authorization': `Bearer ${tokens.accessToken}`,
        'Cache-Control': 'no-cache',
        "Content-Type": "application/json"
    }
    axiosHelper.post('/dashboard/edit-profile', data, { headers })
    .then(res =>{
        console.log(res);
        const userData = {
            message: res.message,
        }
        dispatch(verified())
        dispatch(updateMessage(userData.message))
        dispatch(updateUser(userData))
    })
    .catch((res) => {
        console.log(res);
        console.log(res.message);
        const userData = {
            message: res.message,
        }
        dispatch(updateMessage(userData.message))
        dispatch(updateUser(userData))
        dispatch(isError())
    })
}
export const referrals = () => dispatch => {
    const token = localStorage.getItem('user');
    const tokens = JSON.parse(token)
    const headers = {
        'Authorization': `Bearer ${tokens.accessToken}`,
        'Cache-Control': 'no-cache',
        "Content-Type": "application/json"
    }
    axiosHelper.get(`/dashboard/referrals/${tokens.id}`, { headers })
    .then(res =>{
        const userData = {
            message: res.message,
            referrals: res.referrals
        }
        localStorage.setItem('referrals', JSON.stringify(userData));
    })
    .catch((res) => {
        console.log(res);
        localStorage.setItem('referrals', JSON.stringify(res));
        dispatch(isError())
    })
}
export const getTotals = () => dispatch => {
    const token = localStorage.getItem('user');
    const tokens = JSON.parse(token)
    const headers = {
        'Authorization': `Bearer ${tokens.accessToken}`,
        'Cache-Control': 'no-cache',
        "Content-Type": "application/json"
    }
    axiosHelper.get(`/dashboard/get-totals   `, { headers })
    .then(res =>{
        const userData = {
            referrals: res,
            bal: res.data.data.WalletBalance,
            ref: res.data.data.ReferralCount
        }
        dispatch(updateBal(userData.bal))
        dispatch(updateRef(userData.ref))
        console.log(userData.bal);
        localStorage.setItem('totals', JSON.stringify(userData));
    })
    .catch((res) => {
        console.log(res);
        localStorage.setItem('totals', JSON.stringify(res));
        dispatch(isError())
    })
}
export const createPlan = (data) => dispatch => {
    dispatch(isLoading())
    const token = localStorage.getItem('user');
    const tokens = JSON.parse(token)
    const headers = {
        'Authorization': `Bearer ${tokens.accessToken}`,
        'Cache-Control': 'no-cache',
        "Content-Type": "application/json"
    }
    axiosHelper.post('/create-plan', data, { headers })
    .then(res =>{
        const userData = {
            message: res.data.message
        };
        console.log(res);
        dispatch(updateMessage(userData.message));
        dispatch(updateUser(userData));
        dispatch(showPlan())
    })
    .catch((err) => {
        console.log(err);
        dispatch(isError())
    })
}
export const updatePlan = (data) => dispatch => {
    dispatch(isLoading())
    const ids = localStorage.getItem('id');
    const id = JSON.parse(ids)
    axiosHelper.get(`/update-plan/${id}`, {params: data} )
    .then(res =>{
        const userData = {
            message: res.data.message
        };
        console.log(res);
        dispatch(updateMessage(userData.message));
        dispatch(updateUser(userData));
        dispatch(showPlan())
    })
    .catch((err) => {
        console.log(err);
        dispatch(isError())
    })
}
export const showPlan = () => dispatch => {
    axiosHelper.get('/show-plans' )
    .then(res =>{
        const userData = {
            message: res.message,
            plan: res.data
        }
        localStorage.setItem('plans', JSON.stringify(userData));
    })
    .catch((res) => {
        console.log(res);
        localStorage.setItem('plans', JSON.stringify(res));
        dispatch(isError())
    })
}
export const deletePlan = (data) => dispatch => {
    axiosHelper.get(`/delete-plan/${data}` )
    .then(res =>{
        const userData = {
            message: res.data.message,
        }
        console.log(res);
        dispatch(updateMessage(userData.message));
        dispatch(updateUser(userData));
        dispatch(showPlan())
    })
    .catch((res) => {
        console.log(res);
        dispatch(isError())
    })
}
