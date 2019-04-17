import Axios from 'axios'

Axios.defaults.baseURL = "https://www.easy-mock.com/mock/5b56c02734c1d075b3b438b3";
// Axios.defaults.transformRequest = [data => { return qs.stringify(data) }];
Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Axios.defaults.withCredentials = true;



export default Axios;
