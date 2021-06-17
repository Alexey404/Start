import { Photos, ProfileType } from '../Redux/profile-reducer'
import { instanse, APIResponseType } from './api'

export const profileAPI = {
  getProfileApi(userId: number | null | undefined) {
    return instanse.get<ProfileType>(`profile/${userId}`).then(res => res.data)
  },
  getStatus(userId: number | null | undefined) {
    return instanse
      .get<string>(`profile/status/${userId}`)
      .then(res => res.data)
  },
  updateStatusApi(status: string) {
    return instanse
      .put<APIResponseType>(`profile/status`, { status })
      .then(res => res.data)
  },
  savePhoto(photoFile: File) {
    const formData = new FormData()
    formData.append('image', photoFile)
    return instanse
      .put<APIResponseType<Photos>>(`profile/photo`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(res => res.data)
  },
}
