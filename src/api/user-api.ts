import { GetItemsType, instanse } from './api'

export const usersAPI = {
  getUsers(currentPage: number, pageSize: number) {
    return instanse
      .get<GetItemsType>(`users?page=${currentPage}&count=${pageSize}`)
      .then(res => res.data)
  },
  unfollowApi(id: number) {
    return instanse.delete(`follow/${id}`).then(response => response.data)
  },
  followApi(id: number) {
    return instanse
      .post<ResponseType>(`follow/${id}`)
      .then(response => response.data)
  },
}
