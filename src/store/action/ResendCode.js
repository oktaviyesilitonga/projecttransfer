import * as actionTypes from './actionTypes';
import axios from 'axios';

export const getResendCodeStart = () => {
    return {
        type: actionTypes.FETCH_RESENDCODE_START
    }
}

export const getResendCodeSuccess = (dataResendCode) => {
    return {
        type: actionTypes.FETCH_RESENDCODE_SUCCESS,
        payload: dataResendCode
    }
}

export const getResendCodeFail = (error) => {
    return {
        type: actionTypes.FETCH_RESENDCODE_FAIL,
        payload: error
    }
}

export const getResendCode = () => {
    return (dispatch) => {
        dispatch(getResendCodeStart());
        console.log("masuk resendcode");
        axios({
            method: 'get',
            url: 'https://permata-react.firebaseio.com/verification.json'
        }).then((hasil) => {
            dispatch(getResendCodeSuccess(hasil.data));
        console.log("data", getResendCodeSuccess());
        
            
        }).catch(() => {
           // dispatch(getResendCodeFail(error.hasil))
           console.log("error");
        });
    }
}

