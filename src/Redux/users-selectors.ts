import { AppStateType } from './redux-store'

export const getUsers = (state: AppStateType) => {
  return state.userPage.users
}
export const getPageSize = (state: AppStateType) => {
  return state.userPage.pageSize
}
export const getTotalUsersCount = (state: AppStateType) => {
  return state.userPage.totalUsersCount
}
export const getCurrentPage = (state: AppStateType) => {
  return state.userPage.currentPage
}
export const getIsFetching = (state: AppStateType) => {
  return state.userPage.isFetching
}
export const getFollowingInProgress = (state: AppStateType) => {
  return state.userPage.followingInProgress
}
