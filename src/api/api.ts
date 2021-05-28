import axios from 'axios'

export const instanse = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: { 'API-KEY': '450fb165-b66f-49be-a0ba-5811af982034' },
})

export enum ResultCode {
  Sucsses = 0,
  Error = 1,
  CaptchaIsRequired = 10,
}

export type APIResponseType<D = {}, RC = ResultCode> = {
  data: D
  messeges: Array<string>
  resultCode: RC
}

export type GetItemsType = {
  items: Array<any>
  totalCount: number
  error: string | null
}
