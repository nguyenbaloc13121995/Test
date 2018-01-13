import axios from 'axios'
import * as  configApi from './../constants/ConfigApi'

export default function callApi(endpoint, method = 'GET', body) {
    return axios({
        method: method,
        url: `${configApi.API_URL}/${endpoint}`,
        data: body
    }).catch(err => {
        console.log(err)
    })
}

