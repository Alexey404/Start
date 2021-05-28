import { instanse, APIResponseType } from './api'

export const authAPI = {
  getAuthApi() {
    return instanse
      .get<APIResponseType<MyDataType>>(`auth/me`)
      .then(res => res.data)
  },
  login(email: string, password: string, rememberMe = false) {
    return instanse
      .post<APIResponseType<LoginResponseData>>(`auth/login`, {
        email,
        password,
        rememberMe,
      })
      .then(res => res.data)
  },
  logout() {
    return instanse.delete(`auth/login`)
  },
}

type MyDataType = {
  id: number
  email: string
  login: string
}
type LoginResponseData = {
  userId: number
}
