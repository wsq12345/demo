import instance from './index'

export const login=(data)=>instance.post('/login',data);
export const getUserList=()=>instance.get('/userList');
export const getDetail=()=>instance.get('/detail');