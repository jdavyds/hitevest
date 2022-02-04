import axiosHelper from "../../request/axiosHelper";
import { updateUser, updateMessage, isError, isLoading, verified, logout } from "../slices/userSlice";

export const loginUser = (data) => dispatch => {
    dispatch(isLoading())
    axiosHelper.post('/login', data)
    .then(res =>{
        const { id, name, email, phone, bvn, image, dob, sex, status, account_id, withdrawal_limit, shutdown_level } = res.data.user;
        const { message, referral_link, deposit_wallet, interest_wallet, access_token, expires } = res.data;
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

            referralLink: referral_link,
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
        // localStorage.setItem('user', JSON.stringify(userData));
        dispatch(updateUser(userData));
       })
    .catch(() => {
        dispatch(isError())
    })
} 
export const verifyToken = (data) => dispatch => {
    dispatch(isLoading())
    axiosHelper.post('/verify_password_token', data)
    .then(res =>{
        console.log(res);
        const { message, status} = res.data
        const userData = {
            message: message, 
            status: status
        };
        dispatch(updateMessage(userData.message))
        sessionStorage.setItem('user', JSON.stringify(userData));
        dispatch(verified());
        dispatch(updateUser(userData));
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
        const { message } = res.data
        const userData = {
            message: message, 
        };
        dispatch(verified());
        // localStorage.setItem('user', JSON.stringify(userData));
        dispatch(updateUser(userData));
       })
    .catch(() => {
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
    .catch(() => {
        dispatch(isError())
    })

} 
export const resendOtp = (data) => dispatch => {
    dispatch(isLoading())
    axiosHelper.post('/resend-otp', data)
    .then(res =>{
        // const { id, name, email, phone, password } = res.data.Data
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
        console.log(res);
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
        console.log(res);
        const userData = {
            message: res.message,
            depositHistory: res.data
        }
        localStorage.setItem('depHistory', JSON.stringify(userData));
    })
    .catch((res) => {
        console.log(res);
        dispatch(isError())
    })
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
        console.log(res);
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
        console.log(res);
        const userData = {
            message: res.message,
            depositHistory: res.data
        }
        localStorage.setItem('withdrawHistory', JSON.stringify(userData));
    })
    .catch((res) => {
        console.log(res);
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
        const userData = {
            message: res.message,
        }
        dispatch(verified())
        dispatch(updateMessage(userData.message))
        dispatch(updateUser(userData))
    })
    .catch((res) => {
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