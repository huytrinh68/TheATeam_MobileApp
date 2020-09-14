import { Identify } from '@Helper'
import ConnectionAPI from '@Connection'

import { DefineAPI } from '@Helper'


// action types
export const ActionTypesAuthentication = {
    USER_INFORMATION: 'USER_INFORMATION',
}

// default state
export const defaultState = {
    userInformation: null,
}

// action creator
export const saveDataReduxAuthentication = (type, data) => {
    return {
        type: type,
        payload: data
    }
}

export const loginAction = (params) => async (dispatch, getState) => {
    try {
        const response = await ConnectionAPI({ url: DefineAPI.LOGIN, method: 'POST', params })
        if (response.status) {
            Identify.userToken = response?.data?.token
            dispatch(saveDataReduxAuthentication(ActionTypesAuthentication.USER_INFORMATION, response))
        }
        return response

    }
    catch (err) {
        console.log(err)
    }
}
export const registerUser = (params) => async (dispatch, getState) => {
    try {
        const response = await ConnectionAPI({ url: DefineAPI.REGISTER, method: 'PUT', params })
        if (response.status) {
            Identify.userToken = response?.data?.token
            dispatch(saveDataReduxAuthentication(ActionTypesAuthentication.USER_INFORMATION, response))
        }
        return response

    }
    catch (err) {
        console.log(err)
    }
}


// reducer
export const reducer = (state = defaultState, action) => {
    const { type, payload } = action;
    switch (type) {
        case ActionTypesAuthentication.USER_INFORMATION:
            return { ...state, userInformation: payload };
        default:
            return state
    }
};