import RNFetchBlob from "rn-fetch-blob";
import { Identify } from '@Helper'
import { BackHandler } from 'react-native'

const connectionAPI = ({ url, method = 'GET', params, header }) => {
    console.log(header)

    const setHeader = () => {

        let _headers = {};
        if (header) {
            _headers = { ...header }
            // _headers['Authorization'] = Identify.userToken;
        }
        return _headers;
    }

    const initURL = () => {
        let _fullUrl = Identify.websiteAddress;
        _fullUrl += url;

        if (method === 'GET' && params) {
            let getParams = Object.keys(params).map((key) => {
                return encodeURIComponent(key) + '=' +
                    encodeURIComponent(params[key]);
            }).join('&');
            _fullUrl += "?" + getParams;
        }
        return _fullUrl;
    }

    let bodyFormData = [];

    if (method === 'POST') {
        Object.keys(params).forEach(key => {
            if (params[key]) {
                bodyFormData.push({ name: key, data: params[key].toString() });
            }
        });
    }
    return RNFetchBlob
        .config({
            trusty: true
        })
        .fetch(
            method,
            initURL(),
            setHeader(),
            bodyFormData.length > 0 ? bodyFormData : null
        )
        .then((res) => {
            let data = null
            try {
                data = JSON.parse(res.text());
            }
            catch (err) {
                console.log(err)
                data = {
                    data: {
                        success: false
                    }
                }
            }
            return data
        })
        .catch((err) => {
            console.log(err)
            global.props.alert('Vui lòng kiểm tra kết nối internet và thử lại sau!', false, false, true, () => BackHandler.exitApp())

        });
}
export default connectionAPI