/**
 * Created by Lanny on 2017/7/26.
 */
import {create} from 'apisauce';
const api = (baseUrl, header) => create({
    baseURL: baseUrl,
    timeout: 30000,
    headers: {
        ...header,
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data',
    }
});

export default api;
