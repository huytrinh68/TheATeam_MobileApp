import { Storage, Identify } from '@Helper'
import ConnectionAPI from '@Connection'

import { DefineAPI } from '@Helper'


// action types
export const ActionTypesRequestLoan = {
    LIST_BANK: 'LIST_BANK',
    LIST_HISTORY: 'LIST_HISTORY'

}

// default state
export const defaultState = {
    listLoan: null,
    listHistory: null
}

// action creator
export const saveDataReduxRequestLoan = (type, data) => {
    return {
        type: type,
        payload: data
    }
}

export const getLoan = (params) => async (dispatch, getState) => {
    try {
        const response = await ConnectionAPI({ url: DefineAPI.BANK, method: 'GET', params, header: { 'Authorization': Identify.userToken } })
        dispatch(saveDataReduxRequestLoan(ActionTypesRequestLoan.LIST_BANK, response))
        return response

    }
    catch (err) {
        console.log(err)
    }
}

export const requestLoan = async (params) => {
    try {
        const response = await ConnectionAPI({ url: DefineAPI.LOAN, method: 'POST', params, header: { 'Authorization': Identify.userToken } })
        return response

    }
    catch (err) {
        console.log(err)
    }
}

export const historyRequest = (params) => async (dispatch, getState) => {
    try {
        const response = await ConnectionAPI({ url: DefineAPI.LOAN, method: 'GET', params, header: { 'Authorization': Identify.userToken } })
        dispatch(saveDataReduxRequestLoan(ActionTypesRequestLoan.LIST_HISTORY, response))
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
        case ActionTypesRequestLoan.LIST_BANK:
            return { ...state, listLoan: payload };
        case ActionTypesRequestLoan.LIST_HISTORY:
            return { ...state, listHistory: payload };
        default:
            return state
    }
};