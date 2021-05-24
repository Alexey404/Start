import axios from 'axios'

const instanse = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: { 'API-KEY': '450fb165-b66f-49be-a0ba-5811af982034' },
})

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instanse
      .get(`users?page=${currentPage}&count=${pageSize}`)
<<<<<<< HEAD
      .then((response) => response.data)
  },
  unfollowApi(id) {
    return instanse.delete(`follow/${id}`).then((response) => response.data)
  },
  followApi(id) {
    return instanse.post(`follow/${id}`).then((response) => response.data)
=======
      .then(response => response.data)
  },
  unfollowApi(id) {
    return instanse.delete(`follow/${id}`).then(response => response.data)
  },
  followApi(id) {
    return instanse.post(`follow/${id}`).then(response => response.data)
>>>>>>> 5e5a38064b815b6bb33114e1c98dd42823ca3da1
  },
}

export const profileAPI = {
  getProfileApi(userId) {
    return instanse.get(`profile/${userId}`)
  },
  getStatus(userId) {
    return instanse.get(`profile/status/${userId}`)
<<<<<<< HEAD
  },
  updateStatusApi(status) {
    return instanse.put(`profile/status`, { status })
    console.log(status)
  },
  savePhoto(photoFile) {
    let formData = new FormData()
    formData.append('image', photoFile)
    return instanse.put(`profile/photo`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
=======
  },  
  updateStatusApi(status) {
    return instanse.put(`profile/status`, { status })
>>>>>>> 5e5a38064b815b6bb33114e1c98dd42823ca3da1
  },
}
export const authAPI = {
  getAuthApi() {
<<<<<<< HEAD
    return instanse.get(`auth/me`).then((response) => response)
  },
  login(email, password, rememberMe = false) {
    return instanse.post(`auth/login`, { email, password, rememberMe })
  },
  logout() {
    return instanse.delete(`auth/login`)
=======
    return instanse.get(`auth/me`).then(response => response)
>>>>>>> 5e5a38064b815b6bb33114e1c98dd42823ca3da1
  },
}

export default usersAPI
