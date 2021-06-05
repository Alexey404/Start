import { GetItemsType, instanse } from './api'

const Friends = (friends: string | undefined | null) => {
  if (friends === 'follow') {
    return (friends = `&friend=true`)
  }
  if (friends === 'unfollow') {
    return (friends = `&friend=false`)
  } else {
    return (friends = '')
  }
}

export const usersAPI = {
  getUsers(
    currentPage: number | null | undefined,
    pageSize: number,
    term: string | null | undefined = '',
    friends: string | null | undefined
  ) {
    return instanse
      .get<GetItemsType>(
        `users?page=${currentPage}&count=${pageSize}` +
          (term === '' ? '' : `&term=${term}`) +
          `${Friends(friends)}`
      )
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
